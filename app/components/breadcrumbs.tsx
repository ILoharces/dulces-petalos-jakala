'use client';

import Link from 'next/link';

interface BreadcrumbsProps {
  flowerName: string;
}

export const Breadcrumbs = ({ flowerName }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm md:text-base mb-6">
      <Link 
        href="/" 
        className="text-gray-600 hover:text-black transition-colors duration-200"
      >
        Inicio
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-black font-medium">{flowerName}</span>
    </nav>
  );
};

export default Breadcrumbs;
