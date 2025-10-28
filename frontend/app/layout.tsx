import React from 'react';

import '../src/styles/pages.css';
import '../src/styles/layout.css';
import '../src/styles/components.css';
import '../src/styles/variables.css';

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
