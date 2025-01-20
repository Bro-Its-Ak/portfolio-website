import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Yash Dwivedi - Portfolio Website'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpg`
 
// Image generation
export default async function Image() {
  // Font
 
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        About Acme
      </div>
    ),
    // ImageResponse options
    
  )
}