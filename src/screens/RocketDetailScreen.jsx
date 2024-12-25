import React from 'react';
import { useParams } from 'react-router-dom';
const RocketDetailScreen = () => {
  const { id } = useParams();
  console.log(id);

  return <div>RocketDetailScreen</div>;
};

export default RocketDetailScreen;
