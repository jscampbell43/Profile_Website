import Navigation from './navigation';

export const metadata = {
  title: 'James Campbell - Software Engineer',
  description: 'Personal portfolio website of James Campbell, a Software Engineer',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}