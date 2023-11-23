import '@/app/ui/global.css';
import { MONSERRAT } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${MONSERRAT.className} antialiased`}>{children}</body>
    </html>
  );
}
