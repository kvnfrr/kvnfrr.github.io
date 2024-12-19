import "./globals.css"; // Relative path based on file location

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}