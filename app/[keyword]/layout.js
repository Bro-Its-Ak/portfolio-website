export const metadata = {
  
    keywords:"Blog, linktree, artificial intelligence features, AI tools, Yash,Full Stack Developer, AI, Web Development, Portfolio Website,copilotkit, modern website, responsive design",
  }
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