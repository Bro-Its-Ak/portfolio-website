import 'izitoast/dist/css/iziToast.min.css';
import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Yash Dwivedi | Developer & Designer Portfolio",
  keywords:"Yash,Full Stack Developer, AI, Web Development, Portfolio Website, Innovative Design, Showcasing Projects, AI tools, User friendly interface, Responsive Design, Buisness Growth",
  description: "Welcome to Yash Dwivedi’s portfolio! As a Full Stack Web Developer, I create dynamic, scalable websites that incorporate Artificial Intelligence(AI). My focus is on delivering engaging user experiences. Explore my work and see how I bring ideas to life!",
  twitter: {
    card: "summary_large_image"
  },
  openGraph: {
    title: 'Yash Dwivedi | Web Developer & Designer Portfolio',
    images: [
      `${process.env.NEXT_PUBLIC_URL}/opengraph-image.jpg`
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="IJZRK9vE98r2pXikqlCaHSzRewt4cdj1gytbpadM70A" />
        <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-8VNNEL0W2T" />
        <Script strategy='afterInteractive'
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8VNNEL0W2T');`
          }}
        />
        <Script
        strategy='afterInteractive'
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Yash Dwivedi",
              "url": "https://creatingyash.vercel.app",
              "sameAs": [
                "https://github.com/WebCreatorisHere",
              ],
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer",
                "url": "https://creatingyash.vercel.app", 
                "sameAs": [
                  "https://github.com/WebCreatorisHere"
                ]
              },
              "image": "https://creatingyash.vercel.app/opengraph-image.jpg"
            }),
          }}
        />
      </head>
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
      >
        {children}

      </body>
    </html>
  );
}
