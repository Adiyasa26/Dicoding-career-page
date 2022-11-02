'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getData } from '../../app/careers/job-detail/[id]/page';
import JobDetailCard from '../jobDetail-card';

import './style.scss';

const JobDetailContainer = () => {
  const [jobsInfo, setJobsInfo] = useState<any>([]);

  const pathname = usePathname();

  const pathnameId = pathname.toString().split('/')[3];

  useEffect(() => {
    const getJobsInfo = async () => {
      const jobs = await getData(pathnameId);
      setJobsInfo(jobs.data);
    };
    getJobsInfo();
  }, [pathnameId]);

  return (
    <div className="job-detail--container">
      <JobDetailCard
        title={jobsInfo.title}
        companyName={jobsInfo.company}
        location={jobsInfo.location}
        sector={jobsInfo.sector}
        employees={jobsInfo.employees}
      />
    </div>
  );
};

export default JobDetailContainer;
