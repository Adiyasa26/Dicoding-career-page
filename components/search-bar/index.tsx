'use client';

import React from 'react';
import Image from 'next/image';

import SearchLogo from '../../assets/image/search.png';

import './style.scss';

const SearchBar: React.FC<{ handleChangeSearch: any }> = ({
  handleChangeSearch,
}) => {
  return (
    <div className="search-bar--container">
      <i>
        <Image src={SearchLogo} alt="search icon" />
      </i>
      <input
        className="search"
        type="search"
        placeholder="Pekerjaan apa yang sedang Anda cari?"
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default SearchBar;
