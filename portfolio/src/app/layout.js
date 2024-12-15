// layout.js
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio site!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
