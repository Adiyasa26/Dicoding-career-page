import React from 'react';

import Navigation from '../../../components/navigation-bar';
import DarkHeader from '../../../components/dark-header';

import '../../globals.css';
import Style from './job-list.module.scss';

const JobListLayout: React.FC<{
  children: React.ReactNode;
  darkMode: boolean;
}> = ({ children }) => {
  return (
    <div className={Style.body}>
      <Navigation darkMode={true} />
      <DarkHeader />
      {children}
    </div>
  );
};
export default JobListLayout;
