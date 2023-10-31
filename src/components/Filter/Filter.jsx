import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <form className={css.form}>
      <label>
        Filter contacts by name:
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </form>
  );
};

export default Filter;
