// use client
import React from 'react';
import EmployeeListCard from './/EmployeeListCard/EmployeeListCard';
import {EmployeeListCardProps} from './/EmployeeListCard/EmployeeListCard';
import styles from './EmployeeList.module.scss'; // Make sure to have the corresponding SCSS file

type EmployeeListProps = {
  employees: EmployeeListCardProps[];
  loading: boolean;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, loading }) => {
  if (loading) return <p>Loading...</p>;
  if (!employees.length) return <p>No employees found.</p>;

  return (
    <ul className={styles.grid}>
      {employees.map((employee, index) => (

        <EmployeeListCard {...employee} key={index}></EmployeeListCard>

      ))}
    </ul>
  );
};

export default EmployeeList;
