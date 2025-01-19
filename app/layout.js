import 'izitoast/dist/css/iziToast.min.css';
import "./globals.css";

export const metadata = {
  title: "Yash Dwivedi - Portfolio Website",
  description: "Yash Dwivedi’s portfolio showcases his work as a Full Stack Web Developer, highlighting dynamic and scalable websites he has created. Check it out!",
  twitter:{
    card:"summary_large_image"
  },
  openGraph: {
    title: 'Yash Dwivedi - Portfolio Website',
    images:[
      `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpg`
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        
      </body>
    </html>
  );
}
