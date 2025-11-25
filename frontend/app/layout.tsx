import React from 'react';

import '../src/styles/globalApp.css';
import '../src/styles/pages.module.css';
import '../src/styles/layout.css';
import '../src/styles/components.css';
import '../src/styles/variables.css';

export const metadata = {
  title: 'Hill',
  description: 'Hill - seguimiento de hábitos',
  icons: {
    icon: "../Hill_imagen_logo.jpg",
  }
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
