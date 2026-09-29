import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 52,
          background: "#d8ec85",
          color: "#332834",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          letterSpacing: -5,
          paddingBottom: 6,
        }}
      >
        s.
      </div>
    ),
    size,
  );
}
