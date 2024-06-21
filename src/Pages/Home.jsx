import React, { useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(GlobalContext);
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

  return (
    <div className={`favs-container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <main className="pl-64 pr-64">
        <h1 className="mb-2 text-3xl font-bold text-center">Home</h1>
        <div className="flex flex-wrap ">
          {demoDentists.map((dentist) => (
            <div key={dentist.id} className=" lg:w-1/4">
              <Card
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
                branch={dentist.branch}
                website={dentist.website}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
