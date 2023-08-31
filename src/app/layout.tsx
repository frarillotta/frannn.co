
import StyledComponentsRegistry from '../lib/registry'
import './globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
