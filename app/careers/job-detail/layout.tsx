import React from 'react';

import Navigation from '../../../components/navigation-bar';

import '../../globals.css';

const JobDetailLayout: React.FC<{
  children: React.ReactNode;
  darkMode: boolean;
}> = ({ children }) => {
  return (
    <div>
      <Navigation darkMode={false} />
      {children}
    </div>
  );
};
export default JobDetailLayout;
