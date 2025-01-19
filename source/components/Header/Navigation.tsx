import React from 'react';

type NavigationItem = {
  name: string;
  href: string;
};

interface NavigationProps {
  className?: string;
}

const navigation: NavigationItem[] = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <div className={className}>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
