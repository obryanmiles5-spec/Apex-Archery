import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#EA580C',
          fontWeight: '900',
          border: '2px solid #EA580C',
          fontFamily: 'sans-serif',
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
