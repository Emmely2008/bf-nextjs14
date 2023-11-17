import type { NextApiRequest, NextApiResponse } from 'next';
import { Employee } from '../../types/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 9;
  const nameFilter = query.name as string || '';
  const officeFilter = query.office as string || '';

  try {
    const apiRes = await fetch('https://api.1337co.de/v3/employees', {
      headers: {
        'Authorization': process.env.NEXT_PUBLIC_API_KEY,
      },
    });

    if (!apiRes.ok) {
      throw new Error(`Failed to fetch employees: ${apiRes.status}`);
    }

    const employeesData: Employee[] = await apiRes.json();

    let filteredEmployees = employeesData;
    if (nameFilter) {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    if (officeFilter) {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.office?.toLowerCase().includes(officeFilter.toLowerCase())
      );
    }

    const totalItems = filteredEmployees.length;
    const totalPages = Math.ceil(totalItems / limit);


    if (page > totalPages && totalPages !== 0) {
      return res.status(404).json({ message: 'Page not found' });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

    res.status(200).json({
      data: paginatedEmployees,
      pagination: {
        page,
        limit,
        totalPages,
        totalItems,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
