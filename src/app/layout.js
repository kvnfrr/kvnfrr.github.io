import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}