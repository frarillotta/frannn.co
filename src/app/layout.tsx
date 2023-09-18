
import localFont from 'next/font/local';
import StyledComponentsRegistry from '../lib/registry'
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const myFont = localFont({ src: '../../public/NeueHaasGrotDisp-45Light-Web.woff' });


export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className={myFont.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
}
