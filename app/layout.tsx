import './globals.css';
export const metadata = {
  title: 'Handy Creations',
  description: 'Interior Design, Graphic Design, Web Desing in Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        Navbar 
        <main>
        {children}
        </main>
        Footer
        </body>
    </html>
  )
}
