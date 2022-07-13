import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './greetingSlice';

const GreetingView = () => {
  const greeting = useSelector(state => state.greeting);
  const dispatch = useDispatch();
  console.log('GreetingView: ', greeting.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <>
      <h3>Refresh to change!</h3>
      {greeting.loading && <div>Loading...</div>}
      {!greeting.loading && greeting.error ? (
        <div>Error: {greeting.error}</div>
      ) : null}
      {!greeting.loading && !greeting.error && greeting.greeting ? (
        <h2>{greeting.greeting.greeting}</h2>
      ) : null}

    </>
  );
};

export default GreetingView;
