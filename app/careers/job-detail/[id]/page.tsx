import React from 'react';
import axios from 'axios';

import JobDetailContainer from '../../../../components/jobDetail-container';

import Style from './job-detail.module.scss';

export async function getData(id: any = '') {
  const jobs = await axios.get(
    `https://6331e3cf3ea4956cfb694be6.mockapi.io/jobs/${id}`
  );

  return jobs;
}

const JobDetailPage = () => {
  return (
    <div className={Style.body}>
      <JobDetailContainer />
    </div>
  );
};

export default JobDetailPage;
