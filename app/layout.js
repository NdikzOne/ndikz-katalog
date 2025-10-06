import './globals.css'

export const metadata = {
  title: 'Katalog Pakaian Modern - Elegan & Berkelas',
  description: 'Temukan koleksi pakaian modern dan elegan untuk gaya hidup Anda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}