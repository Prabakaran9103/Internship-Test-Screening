// app/layout.tsx (root layout)


import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
}
