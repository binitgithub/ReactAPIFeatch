import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbanr, Home, About, Contact, Student } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbanr/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact'  element={<Contact/>} />
          <Route path='/student'  element={<Student/>} />
        </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
