import { ImageResponse } from "next/og";
import { NAME, ROLE } from "@/lib/site";

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
            color: "#4c82c0",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 48,
          }}
        >
          PL
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#4c82c0", fontWeight: 600 }}>
          {ROLE.toLowerCase()}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 12 }}>
          {NAME}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#93a1ac", marginTop: 24 }}>
          APIs REST e aplicações web com Java (Spring Boot) e Python (Django)
        </div>
      </div>
    ),
    { ...size }
  );
}
