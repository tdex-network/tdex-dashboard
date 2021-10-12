import React from 'react';

import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Shell = ({ children, className = '' }: Props): JSX.Element => {
  return (
    <div id="shell" className="grid grid-rows-pancakeStack h-screen">
      <Navbar />
      <main className={`container mx-auto ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Shell;
