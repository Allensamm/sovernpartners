/**
 * Build a static Sites preview without changing the normal Next.js runtime.
 * The legacy news/TTS APIs are retained in the main project; the redesigned UI
 * does not call them. A static preview excludes these server-only endpoints.
 */
import { cp, mkdir, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
const root = process.cwd();
const stage = path.join(root, ".sites-build");
const output = path.join(root, "dist");
const hosting = JSON.parse(
  await readFile(path.join(root, ".openai/hosting.json"), "utf8"),
);
if (!hosting.project_id) throw new Error("A Sites project_id is required.");
if (!process.env.NEXT_PUBLIC_SITE_URL)
  throw new Error("Set NEXT_PUBLIC_SITE_URL to the private preview origin.");
await rm(stage, { recursive: true, force: true });
await mkdir(stage, { recursive: true });
try {
  for (const file of [
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "postcss.config.mjs",
  ]) {
    await cp(path.join(root, file), path.join(stage, file), {
      recursive: true,
      filter: (source) => source !== path.join(root, "src/app/api"),
    });
  }
  await symlink(
    path.join(root, "node_modules"),
    path.join(stage, "node_modules"),
    "dir",
  );
  await writeFile(
    path.join(stage, "next.config.mjs"),
    `export default {output:"export",images:{unoptimized:true},turbopack:{root:${JSON.stringify(root)}}};\n`,
  );
  const result = spawnSync(
    process.execPath,
    [path.join(root, "node_modules/next/dist/bin/next"), "build"],
    { cwd: stage, stdio: "inherit", env: process.env },
  );
  if (result.status !== 0) throw new Error("Static preview build failed.");
  await rm(output, { recursive: true, force: true });
  await mkdir(path.join(output, "client"), { recursive: true });
  await cp(path.join(stage, "out"), path.join(output, "client"), {
    recursive: true,
  });
  await mkdir(path.join(output, ".openai"), { recursive: true });
  await writeFile(
    path.join(output, ".openai/hosting.json"),
    JSON.stringify(
      { project_id: hosting.project_id, static: { directory: "client" } },
      null,
      2,
    ),
  );
  console.log("Static preview ready in dist/client.");
} finally {
  await rm(stage, { recursive: true, force: true });
}
