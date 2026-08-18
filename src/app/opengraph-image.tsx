import { ImageResponse } from "next/og";
import { COMPANY_NAME, TAGLINE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0d10",
          color: "#f2f5f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "#12161b",
            border: "3px solid #171c22",
            boxShadow: "0 0 0 6px rgba(76, 130, 192, 0.14)",
            marginBottom: 48,
          }}
        >
          <svg width="72" height="72" viewBox="0 0 24 24" fill="#4c82c0">
            <path d="M12.5 2 4 13.5h6.2L10.5 22 20 9.5h-6.5L12.5 2Z" />
          </svg>
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          {COMPANY_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#4c82c0", fontWeight: 600, marginTop: 16 }}>
          {TAGLINE}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#93a1ac", marginTop: 24 }}>
          Sistemas sob medida com foco em back-end — Java (Spring Boot) e Python (Django)
        </div>
      </div>
    ),
    { ...size }
  );
}
