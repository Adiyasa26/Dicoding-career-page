import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import './style.scss';

import DicodingLogoDark from '../../assets/image/Main_Logo Dicoding.png';
import DicodingLogoLight from '../../assets/image/Dicoding_Logo.png';
import CooperLogo from '../../assets/image/job.png';
import DownLogoDark from '../../assets/image/chevron-dark-mode.png';
import DownLogoLight from '../../assets/image/chevron-light-mode.png';
import ProfilePictureDummyLogo from '../../assets/image/user.png';
import NotificationLogoDark from '../../assets/image/notification-dark-mode.png';
import NotificationLogoLight from '../../assets/image/notification-light-mode.png';

const Navigation: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <div className={`navigation--container ${darkMode ? '' : 'light'}`}>
      <div className="navigation--container_left">
        <div className="logo">
          <Image
            src={darkMode ? DicodingLogoDark : DicodingLogoLight}
            alt={'Logo Dicoding'}
            priority
          />
          <span>Jobs</span>
          <div className="line"></div>
        </div>

        <div className="link--container">
          <Link href="/">Looking for job</Link>
          <Link href="/">Hiring</Link>
        </div>
      </div>

      <div className="navigation--container_right">
        <div className="dropdown--container">
          <Image src={CooperLogo} alt="Logo Koper" priority />
          <span>Siap untuk di-interview</span>
          <Image
            src={darkMode ? DownLogoDark : DownLogoLight}
            alt="Logo Anak Panah Turun"
            priority
          />
        </div>

        <div className="control-user--container">
          <div className="profile-picture--container">
            <Image
              src={ProfilePictureDummyLogo}
              alt="Logo Profile Picture"
              priority
            />
            <Image
              src={darkMode ? DownLogoDark : DownLogoLight}
              alt="Logo Anak Panah Turun"
              priority
            />
          </div>
          <Image
            src={darkMode ? NotificationLogoDark : NotificationLogoLight}
            alt="Logo Notifikasi"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
