'use-client';

import Link from 'next/link';

import Image from 'next/image';

import './style.scss';

import DicodingLogo from '../../assets/image/Main_Logo Dicoding.png';
import CooperLogo from '../../assets/image/job.png';
import DownLogo from '../../assets/image/chevron.png';
import ProfilePictureDummyLogo from '../../assets/image/user.png';
import NotificationLogo from '../../assets/image/notification.png';

const Navigation: React.FC = () => {
  return (
    <div className={'navigation--container'}>
      <div className="navigation--container_left">
        <div className="logo">
          <Image src={DicodingLogo} alt={'Logo Dicoding'} priority={true} />
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
          <Image src={CooperLogo} alt="Logo Koper" />
          <span>Siap untuk di-interview</span>
          <Image src={DownLogo} alt="Logo Anak Panah Turun" />
        </div>

        <div className="control-user--container">
          <div className="profile-picture--container">
            <Image src={ProfilePictureDummyLogo} alt="Logo Profile Picture" />
            <Image src={DownLogo} alt="Logo Anak Panah Turun" />
          </div>
          <Image src={NotificationLogo} alt="Logo Notifikasi" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
