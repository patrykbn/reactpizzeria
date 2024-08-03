import Main from './components/pages/Main/Main';
import Table from './components/pages/Table/Table';
import { Routes, Route } from 'react-router-dom';
import Notfound from './components/pages/notfound/notfound';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer'

function App() {
  return (
    <div className="pizzeriaApp">
      <Navbar />
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/table/:id' element={<Table />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
