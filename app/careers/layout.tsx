import Navigation from '../../components/navigation-bar';
import { Inter } from '@next/font/google';

const inter = Inter({
  weight: '500',
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <Navigation />
      {children}
    </div>
  );
}
