import React from 'react';

import './style.scss';

const FilterCheckbox: React.FC<{
  text: string;
  value: string;
  handleOnChange: any;
  selected: boolean;
}> = ({ text, handleOnChange, selected, value }) => {
  return (
    <div className="filter-checkbox--container">
      <input
        type="checkbox"
        checked={selected}
        onChange={handleOnChange}
        value={value}
      />
      <p>{text}</p>
    </div>
  );
};

export default FilterCheckbox;
