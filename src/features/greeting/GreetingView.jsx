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
    <div>
      <h3>Random Greeting:</h3>
      {greeting.loading && <div>Loading...</div>}
      {!greeting.loading && greeting.error ? (
        <div>Error: {greeting.error}</div>
      ) : null}
      {!greeting.loading && !greeting.error && greeting.greeting ? (
        <div>{greeting.greeting.greeting}</div>
      ) : null}
      
    </div>
  );
};

export default GreetingView;
