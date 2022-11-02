import React from 'react';

import Image from 'next/image';

import FilterCheckbox from '../filter-checkbox';

import PlusLogo from '../../assets/image/plus-icon.png';

import './style.scss';

const FilterContainer: React.FC<{
  handleOnChangeSkill: any;
  handleOnChangeType: any;
  handleOnChangeLocation: any;
  handleOnChangeExperience: any;
  filterParams: any;
}> = ({
  handleOnChangeSkill,
  handleOnChangeType,
  handleOnChangeLocation,
  handleOnChangeExperience,
  filterParams,
}) => {
  const skillOptions = [
    { 'Back-End Developer': 'Backend Developer' },
    { 'Front-End Developer': 'Frontend Developer' },
    { 'Product Manager': 'Product Manager' },
    { 'Product Designer': 'Product Designer' },
    { 'iOS Developer': 'iOS Developer' },
  ];
  const typeOptions = [
    { 'Full-Time': 'Full-Time' },
    { Freelance: 'Freelance' },
    { Intern: 'Intern' },
    { 'Bisa Remote': 'Bisa Remote' },
  ];
  const locationOptions = [
    { Bandung: 'Bandung' },
    { Jakarta: 'Jakarta' },
    { Yogyakarta: 'Yogyakarta' },
  ];
  const experienceOptions = [
    { Freshgraduate: 'Fresh Graduate' },
    { '1-3 tahun': '1-3 tahun' },
    { '3-5 tahun': '3-5 tahun' },
    { '5-10 tahun': '5-10 tahun' },
    { 'Lebih dari 10 tahun': 'Lebih dari 10 tahun' },
  ];
  return (
    <div className="filter--container">
      <div className="filter-content skills">
        <h1>Keahlian</h1>
        {skillOptions.map((option) =>
          Object.entries(option).map(([key, value]) => {
            return (
              <FilterCheckbox
                key={key}
                text={key}
                value={value}
                handleOnChange={() => handleOnChangeSkill(value)}
                selected={filterParams.skills.includes(value)}
              />
            );
          })
        )}
        <div className="more-details--container">
          <div className="more-details--content">
            <p>Selengkapnya</p>
            <Image src={PlusLogo} alt="plus logo" priority />
          </div>
        </div>
      </div>
      <div className="filter-content type">
        <h1>Tipe Pekerjaan</h1>
        {typeOptions.map((option) =>
          Object.entries(option).map(([key, value]) => {
            return (
              <FilterCheckbox
                key={key}
                text={key}
                value={value}
                handleOnChange={() => handleOnChangeType(value)}
                selected={filterParams.job_type.includes(value)}
              />
            );
          })
        )}
      </div>
      <div className="filter-content location">
        <h1>kota</h1>
        {locationOptions.map((option) =>
          Object.entries(option).map(([key, value]) => {
            return (
              <FilterCheckbox
                key={key}
                text={key}
                value={value}
                handleOnChange={() => handleOnChangeLocation(value)}
                selected={filterParams.location.includes(value)}
              />
            );
          })
        )}
      </div>
      <div className="filter-content experience">
        <h1>Pengalaman</h1>
        {experienceOptions.map((option) =>
          Object.entries(option).map(([key, value]) => {
            return (
              <FilterCheckbox
                key={key}
                text={key}
                value={value}
                handleOnChange={() => handleOnChangeExperience(value)}
                selected={filterParams.experience.includes(value)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default FilterContainer;
