// app/layout.tsx
import '../styles/globalApp.css';
import '../styles/home.css';
import React from 'react';

export const metadata = {
  title: 'Hill',
  description: 'Hill - seguimiento de hábitos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
