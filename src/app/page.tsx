"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import PaginationMobile from '../components/Pagination/PaginationMobile';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import EmployeeList from '../components/EmployeeList/EmployeeList';

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false); const [nameFilter, setNameFilter] = useState('');
  const [officeFilter, setOfficeFilter] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [nameFilter, officeFilter]);

  useEffect(() => {
    const buildQueryString = () => {
      const queries = new URLSearchParams();
      if (nameFilter) queries.append('name', nameFilter);
      if (officeFilter) queries.append('office', officeFilter);
      queries.append('page', currentPage.toString());
      return `?${queries.toString()}`;
    };

    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const queryString = buildQueryString();
        const response = await fetch(`/api/employees${queryString}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data, pagination } = await response.json();
        setEmployees(data);
        setTotalPages(pagination.totalPages);
      } catch (error) {
        console.error("Could not fetch employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [nameFilter, officeFilter, currentPage]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          The Fellowship of Tretton37
        </h1>

        <div>
          <a
            href="https://www.tretton37.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Logo.svg"
              alt="Tretton37 Logo"
              className={styles.logo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.menu}>
        <FilterMenu
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          officeFilter={officeFilter}
          setOfficeFilter={setOfficeFilter}
        />
         <PaginationMobile 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPrevious={handlePrevious} 
        onNext={handleNext} 
      />
      </div>
      <div className={styles.center}>
        <EmployeeList employees={employees} loading={loading} />
      </div>
    </main>
  );
}
