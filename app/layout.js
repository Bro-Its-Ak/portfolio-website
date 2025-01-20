import 'izitoast/dist/css/iziToast.min.css';
import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Yash Dwivedi | Developer & Designer Portfolio",
  description: "Welcome to Yash Dwivedi’s portfolio! As a Full Stack Web Developer, I create dynamic, scalable websites that incorporate Artificial Intelligence(AI). My focus is on delivering engaging user experiences. Explore my work and see how I bring ideas to life!",
  twitter:{
    card:"summary_large_image"
  },
  openGraph: {
    title: 'Yash Dwivedi | Web Developer & Designer Portfolio',
    images:[
      `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpg`
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-8VNNEL0W2T"/>
<Script
id="google-analytics"
dangerouslySetInnerHTML={{
    __html:`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8VNNEL0W2T');`
  }}
/>
      </head>
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
      >
        <CopilotKit runtimeUrl="/api/copilotkit"> 
            {children}
          </CopilotKit>
        
      </body>
    </html>
  );
}
