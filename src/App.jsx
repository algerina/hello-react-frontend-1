import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import GreetingView from './features/greeting/GreetingView';
import './App.css';

function App() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <Routes>
          <Route path='/' element={<GreetingView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
