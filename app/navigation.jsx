'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={styles.nav}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            ...styles.navLink,
            ...(pathname === item.href ? styles.activeLink : {}),
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    justifyContent: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '500',
  },
  activeLink: {
    backgroundColor: '#0070f3',
    color: 'white',
  },
};
