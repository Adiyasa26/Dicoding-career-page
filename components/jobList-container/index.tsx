'use client';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { getData } from '../../app/careers/job-list/page';

import FilterContainer from '../filter-container';
import JobListCard from '../jobList-card';
import SearchBar from '../search-bar';

import './style.scss';

interface TypeOfFilterParams {
  search: string;
  skills: string[];
  job_type: string[];
  location: string[];
  experience: string[];
}

const handleChangeCheckboxHelper = (key: string, selected: any) => {
  let find = selected.indexOf(key);
  const emptyString = selected.indexOf('');

  if (find > -1) {
    if (selected.length === 1 && emptyString === -1) {
      selected.push('');
      selected.splice(find, 1);
    } else {
      selected.splice(find, 1);
    }
  } else {
    if (emptyString > -1) {
      selected[emptyString] = key;
    } else {
      selected.push(key);
    }
  }
};

const JobListContainer = () => {
  const [jobsInfo, setJobsInfo] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredJobsResult, setFilteredJobsResult] = useState([]);
  const [filterParams, setFilterParams] = useState<TypeOfFilterParams>({
    search: '',
    skills: [''],
    job_type: [''],
    location: [''],
    experience: [''],
  });

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
    setFilterParams({
      ...filterParams,
      search: e.target.value,
    });
  };

  const handleChangeSkillCheckbox = (key: string) => {
    let selected = filterParams.skills;
    handleChangeCheckboxHelper(key, selected);
    setFilterParams({ ...filterParams, skills: selected });
  };
  const handleChangeTypeCheckbox = (key: string) => {
    let selected = filterParams.job_type;
    handleChangeCheckboxHelper(key, selected);

    setFilterParams({ ...filterParams, job_type: selected });
  };
  const handleChangeLocationCheckbox = (key: string) => {
    let selected = filterParams.location;
    handleChangeCheckboxHelper(key, selected);

    setFilterParams({ ...filterParams, location: selected });
  };
  const handleChangeExperienceCheckbox = (key: string) => {
    let selected = filterParams.experience;
    handleChangeCheckboxHelper(key, selected);

    setFilterParams({ ...filterParams, experience: selected });
  };

  useEffect(() => {
    const jobsFilter = jobsInfo.filter((job: any) => {
      const jobExperience = job.experience
        ? '1-3 tahun pengalaman'
        : 'Fresh Graduate';

      return (
        job.title.toLowerCase().includes(filterParams.search.toLowerCase()) &&
        filterParams.skills.some((skill: string) =>
          job.skills.includes(skill)
        ) &&
        filterParams.job_type.some((type: string) =>
          job.job_type.includes(type)
        ) &&
        filterParams.location.some((loc: string) =>
          job.location.includes(loc)
        ) &&
        filterParams.experience.some((exp: string) =>
          jobExperience.includes(exp)
        )
      );
    });
    setFilteredJobsResult(jobsFilter);
  }, [filterParams, jobsInfo]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredJobsResult.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredJobsResult.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredJobsResult]);

  return (
    <div className="job-list--container">
      <div className="job-list--container_left">
        <h1 className="title">Daftar Pekerjaan Terbaru</h1>

        <div className="card--container">
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
              skills={job.skills}
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
      </div>
      <div className="job-list--container_right">
        <SearchBar handleChangeSearch={handleChangeSearch} />
        <FilterContainer
          handleOnChangeSkill={handleChangeSkillCheckbox}
          handleOnChangeType={handleChangeTypeCheckbox}
          handleOnChangeLocation={handleChangeLocationCheckbox}
          handleOnChangeExperience={handleChangeExperienceCheckbox}
          filterParams={filterParams}
        />
      </div>
    </div>
  );
};

export default JobListContainer;
