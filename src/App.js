import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import CardsList from './components/CardsList';
import data from './data'

const App = () => {
  return (
    <>
      <Title {...data} />
      <CardsList {...data} />
    </>
  );
}

export default App;
