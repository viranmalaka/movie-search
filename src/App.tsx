import React from 'react';
import './Styles/App.scss';
import MovieSearch from './Component/MovieSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <MovieSearch />
    </div>
  );
};

export default App;
