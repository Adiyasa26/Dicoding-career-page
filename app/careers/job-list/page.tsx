import React from 'react';
import axios from 'axios';

import JobListCard from '../../../components/jobList-card';

import Style from './job-list.module.scss';
import Pagination from '../../../components/Pagination';

export async function getData(id = '') {
  const jobs = await axios.get(
    `https://6331e3cf3ea4956cfb694be6.mockapi.io/jobs/${id}`
  );

  return jobs;
}

const JobListPage = async () => {
  const jobs = await getData();

  const pages = [
    jobs.data.slice(0, 8),
    jobs.data.slice(8, 16),
    jobs.data.slice(16, 24),
    jobs.data.slice(24, 32),
    jobs.data.slice(32, 40),
    jobs.data.slice(40, 43),
  ];

  console.log(pages[0]);

  return (
    <div className={Style.page}>
      <div className={Style.container}>
        <h1 className={Style.title}>Daftar Pekerjaan Terbaru</h1>
        {pages[2].map((job: any) => (
          <JobListCard
            key={job.id}
            id={job.id}
            image={job.logo}
            title={job.title}
            companyName={job.company}
            jobType={job.job_type}
            location={job.location}
            experience={job.experience}
            createdAt={job.createdAt}
            closedAt={job.closeAt}
          />
        ))}
        <Pagination pages={pages} />
      </div>
    </div>
  );
};

export default JobListPage;
