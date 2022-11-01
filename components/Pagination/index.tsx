import React from 'react';
import Image from 'next/image';

import LeftArrow from '../../assets/image/chevron-left.png';
import RightArrow from '../../assets/image/chevron-right.png';

import './style.scss';

const Pagination: React.FC<{ pages: any[] }> = ({ pages }) => {
  const currentPage: any[] = [];

  // TODO Next13 cannot warp up client component inside server component so the pagination doesn't work
  // const handleClick = (event: any) => {
  //   currentPage.splice(0, pages.length);
  //   currentPage.push(pages[event.selected]);
  // };

  console.log(currentPage);
  return (
    <div className="page-for-paginate--container">
      <div className="pagination">
        <div className="pagination-item">
          <Image src={LeftArrow} alt="left arrow" />
        </div>
        {pages.map((page: any) => (
          <div
            key={pages.indexOf(page) + 1}
            className={`pagination-item paginate-${pages.indexOf(page) + 1}`}
          >
            {pages.indexOf(page) + 1}
          </div>
        ))}
        <div className="pagination-item">
          <Image src={RightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
