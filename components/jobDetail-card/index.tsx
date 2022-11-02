import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import JobProfileLogo from '../../assets/image/trailing.png';
import JobDivisionLogo from '../../assets/image/job-division.png';
import LocationLogo from '../../assets/image/job-location.png';
import UserLogo from '../../assets/image/users.png';
import BackLogo from '../../assets/image/back-icon.png';
import ShareLogo from '../../assets/image/share.png';
import LoveLogo from '../../assets/image/love.png';

import './style.scss';

interface Props {
  title: string;
  companyName: string;
  sector: string;
  location: string;
  employees: number;
}

const JobDetailCard: React.FC<Props> = (props: Props) => {
  const { title, companyName, sector, location, employees } = props;

  return (
    <div className="job-detail-card--container">
      <div className="job-detail-card--container-header">
        <Link href="/careers/job-list">
          Semua daftar pekerjaan
          <Image src={BackLogo} alt="back logo" />
        </Link>
      </div>

      <div className="job-detail-card--container-wrapper">
        <div className="job-detail-card--container-wrapper_left">
          <Image src={JobProfileLogo} unoptimized alt="Job image" priority />
        </div>
        <div className="job-detail-card--container-wrapper_mid">
          <h1>{title}</h1>
          <div className="job-detail-card--container-wrapper_mid--details">
            <div className="first-line">
              <h2>Sektor Bisnis: {sector}</h2>
            </div>
            <div className="second-line">
              <Image
                src={JobDivisionLogo}
                alt="Logo Nama Tempat Kerja"
                priority
              />
              <h3>{companyName}</h3>
              <Image src={LocationLogo} alt="Logo Lokasi" priority />
              <h3>{location}</h3>
              <Image src={UserLogo} alt="Logo User" priority />
              <h3>{employees} Karyawan</h3>
            </div>
          </div>
        </div>
        <div className="job-detail-card--container-wrapper_right">
          <button className="button-icon">
            <Image src={ShareLogo} alt="share image" />
          </button>
          <button className="button-icon">
            <Image src={LoveLogo} alt="share image" />
          </button>
          <button className="button-text">Kirim Lamaran</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;
