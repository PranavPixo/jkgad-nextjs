import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'General Administration Department - Government of Jammu and Kashmir',
  description: 'Official website of General Administration Department, Government of Jammu and Kashmir',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
