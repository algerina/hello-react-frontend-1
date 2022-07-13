import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
