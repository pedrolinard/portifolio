import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#12161b",
          color: "#4c82c0",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        PL
      </div>
    ),
    { ...size }
  );
}
