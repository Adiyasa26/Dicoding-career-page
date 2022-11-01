import React from 'react';
import axios from 'axios';

import Style from './job-list.module.scss';
import JobListContainer from '../../../components/jobList-container';

export async function getData(id = '') {
  const jobs = await axios.get(
    `https://6331e3cf3ea4956cfb694be6.mockapi.io/jobs/${id}`
  );

  return jobs;
}

const JobListPage = () => {
  return (
    <div className={Style.page}>
      <JobListContainer />
    </div>
  );
};

export default JobListPage;
