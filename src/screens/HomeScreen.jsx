import React from 'react';
import { Link } from 'react-router-dom';
const HomeScreen = () => {
  const resources = [
    {
      name: 'Rockets',
      url: '/rockets',
    },
    {
      name: 'Dragons',
      url: '/dragons',
    },
    {
      name: 'Launches',
      url: '/launches',
    },
  ];
  return (
    <div className='row'>
      {resources.map((res) => (
        <div className='col-md-4'>
          <Link to={res.url}>
            <div className='card p-3'>{res.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
