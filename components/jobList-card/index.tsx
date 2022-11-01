import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import JobDivisionLogo from '../../assets/image/job-division.png';
import LocationLogo from '../../assets/image/job-location.png';
import CooperLogo from '../../assets/image/experience.png';

import './style.scss';

interface Props {
  id: number;
  image: string;
  title: string;
  companyName: string;
  jobType: string;
  location: string;
  experience: boolean;
  createdAt: string;
  closedAt: string;
}

export const dateParser = (date: string) => {
  const month = [
    'Jan',
    'Feb',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'Sept',
    'Okt',
    'Nov',
    'Des',
  ];
  const dateParsed = new Date(date);

  return `${dateParsed.getDate()} ${
    month[dateParsed.getMonth()]
  } ${dateParsed.getFullYear()}`;
};

const JobListCard: React.FC<Props> = (props: Props) => {
  const {
    id,
    image,
    title,
    companyName,
    jobType,
    location,
    experience,
    createdAt,
    closedAt,
  } = props;

  return (
    <Link
      href={`/careers/job-detail/${id}`}
      key={id}
      className="job-list-card--container"
    >
      <div className="job-list-card--container_left">
        <Image src={image} height={96} width={96} unoptimized alt="Job image" />
      </div>
      <div className="job-list-card--container_mid">
        <h2>{title}</h2>
        <div className="job-list-card--container_mid--details">
          <div className="first-line">
            <Image
              src={JobDivisionLogo}
              alt="Logo Nama Tempat Kerja"
              priority
            />
            <h3>{companyName}</h3>
            <h4>{jobType}</h4>
          </div>
          <div className="second-line">
            <Image src={LocationLogo} alt="Logo Lokasi" priority />
            <h3>{location}</h3>
            <Image src={CooperLogo} alt="Logo Koper" priority />
            <h3>{experience ? '1-3 tahun pengalaman' : 'Fresh Graduate'}</h3>
          </div>
        </div>
      </div>
      <div className="job-list-card--container_right">
        <p>Dibuat pada {dateParser(createdAt)}</p>
        <p>Lamar sebelum {dateParser(closedAt)}</p>
      </div>
    </Link>
  );
};

export default JobListCard;
