import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';

const demoDentists = [
  { id: 1, name: 'Leanne Graham', email: 'leanne@example.com', phone: '1-770-736-8031', website: 'leanne.com', branch: 'Downtown' },
  { id: 2, name: 'Ervin Howell', email: 'ervin@example.com', phone: '010-692-6593', website: 'ervin.org', branch: 'Uptown' },
  { id: 3, name: 'Clementine Bauch', email: 'clementine@example.com', phone: '1-463-123-4447', website: 'clementine.net', branch: 'Midtown' },
  { id: 4, name: 'Patricia Lebsack', email: 'patricia@example.com', phone: '493-170-9623', website: 'patricia.biz', branch: 'West End' },
  { id: 5, name: 'Chelsey Dietrich', email: 'chelsey@example.com', phone: '(254)954-1289', website: 'chelsey.info', branch: 'East Side' },
  { id: 6, name: 'Mrs. Dennis Schulist', email: 'dennis@example.com', phone: '1-477-935-8478', website: 'dennis.com', branch: 'South Park' },
  { id: 7, name: 'Kurtis Weissnat', email: 'kurtis@example.com', phone: '210-067-6132', website: 'kurtis.org', branch: 'North Hills' },
  { id: 8, name: 'Nicholas Runolfsdottir V', email: 'nicholas@example.com', phone: '586-493-6943', website: 'nicholas.biz', branch: 'Beachfront' },
  { id: 9, name: 'Glenna Reichert', email: 'glenna@example.com', phone: '(775)976-6794', website: 'glenna.com', branch: 'Harbor' },
  { id: 10, name: 'Clementina DuBuque', email: 'clementina@example.com', phone: '1-463-123-4447', website: 'clementina.net', branch: 'Greenfield' },
];

const Detail = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const dentistDetail = demoDentists.find(dentist => dentist.id === parseInt(id));
    setDentist(dentistDetail);
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`p-6 ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="mb-4 text-2xl font-bold">Detail Dentist ID: {id}</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Field
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Detail
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Name</td>
            <td className="px-6 py-4 whitespace-nowrap">{dentist.name}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Email</td>
            <td className="px-6 py-4 whitespace-nowrap">{dentist.email}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Phone</td>
            <td className="px-6 py-4 whitespace-nowrap">{dentist.phone}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Website</td>
            <td className="px-6 py-4 whitespace-nowrap">{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
