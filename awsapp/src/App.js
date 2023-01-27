import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchImages } from './store/actions';
import Routes from './routes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Routes />
    </div>
  );
};

export default App;
