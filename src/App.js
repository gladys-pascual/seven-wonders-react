import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import CardsList from './components/CardsList';
import data from './data'

const App = () => {

  const handleClick = (wonderName) => {
    alert(wonderName);
  }

  return (
    <>
      <Title {...data} />
      <CardsList {...data} handleClick={handleClick} />
    </>
  );
}

export default App;
