import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12161b",
        }}
      >
        <svg width="96" height="96" viewBox="0 0 24 24" fill="#4c82c0">
          <path d="M12.5 2 4 13.5h6.2L10.5 22 20 9.5h-6.5L12.5 2Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
