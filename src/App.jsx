import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className='router-container'>
      <div className='inner-container'>
        <Routes>
          <Route path='/' element={<Greeting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
