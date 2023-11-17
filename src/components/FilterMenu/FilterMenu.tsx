import React from 'react';
import styles from './FilterMenu.module.scss';


interface FilterMenuProps {
  nameFilter: string;
  setNameFilter: (filter: string) => void;
  officeFilter: string;
  setOfficeFilter: (filter: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  nameFilter,
  setNameFilter,
  officeFilter,
  setOfficeFilter,
}) => {
  
  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  const handleOfficeFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfficeFilter(e.target.value);
  };

  return (
    <div role="search" className={styles.searchContainer}>
      <label htmlFor="nameFilter" className={`visually-hidden`}>
        Filter by name
      </label>
      <input
        type="search"
        id="nameFilter"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={handleNameFilterChange}
        aria-label="Search by name"
        className={styles.searchInput}
      />

      <label htmlFor="officeFilter" className="visually-hidden">
        Filter by office
      </label>
      <input
        type="search"
        id="officeFilter"
        placeholder="Filter by office"
        value={officeFilter}
        onChange={handleOfficeFilterChange}
        aria-label="Search by office"
        className={styles.searchInput}
      />
    </div>
  );
};

export default FilterMenu;
