import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import RocketListScreen from './screens/RocketListScreen';
import DragonListScreen from './screens/DragonListScreen';
import LaunchListScreen from './screens/LaunchListScreen';
import RocketDetailScreen from './screens/RocketDetailScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='container my-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/rockets' element={<RocketListScreen />} />
          <Route path='/rockets/:id' element={<RocketDetailScreen />} />
          <Route path='/dragons' element={<DragonListScreen />} />
          <Route path='/launches' element={<LaunchListScreen />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
