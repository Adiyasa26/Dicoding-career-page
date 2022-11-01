import React from 'react';
import Image from 'next/image';

import ImageDecoration from '../../assets/image/pexels-sora-shimazaki-5668845 1.png';
import ArrowDecoration from '../../assets/image/variant-1.png';

import './style.scss';

const DarkHeader: React.FC = () => {
  return (
    <div className="dark-header--container">
      <div className="text--container">
        <h2>Dicoding Jobs</h2>
        <h1>
          Temukan lowongan yang <br /> cocok dengan Anda
        </h1>
      </div>

      <div className="header--decorator">
        <div className="parent-decoration">
          <Image src={ArrowDecoration} alt="Arrow Decoration" priority />
          <div className="child-decoration">
            <Image src={ImageDecoration} alt="Image Decoration" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkHeader;
