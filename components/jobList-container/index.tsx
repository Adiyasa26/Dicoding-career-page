'use client';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { getData } from '../../app/careers/job-list/page';
import JobListCard from '../jobList-card';
import SearchBar from '../search-bar';

import './style.scss';

const JobListContainer = () => {
  const [jobsInfo, setJobsInfo] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState('');

  const itemsPerPage = 8;

  useEffect(() => {
    const getJobsInfo = async () => {
      const jobs = await getData();
      setJobsInfo(jobs.data);
    };
    getJobsInfo();
  }, []);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % jobsInfo.length;
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredJobs = jobsInfo.filter((job: any) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredJobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredJobs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredJobs]);

  return (
    <div className="job-list--container">
      <div className="job-list--container_left">
        <h1 className="title">Daftar Pekerjaan Terbaru</h1>
        {currentItems.map((job: any) => (
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

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
      <div className="job-list--container_right">
        <SearchBar handleChangeSearch={handleChangeSearch} />
      </div>
    </div>
  );
};

export default JobListContainer;
