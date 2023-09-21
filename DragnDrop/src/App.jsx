import { Route, Routes } from 'react-router-dom';
import Signin from './Signin/Signin';
// import Signup from './Signup/Signup';
import MainPage from './Main/MainPage';
import toast, { Toaster } from 'react-hot-toast';
// import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
    <Toaster />
    <Routes>
      <Route path="/" element={<Signin />} />
      {/* <Route path='/' element={<Signup />} /> */}
      <Route path='/dashboard' element={<MainPage />} />
      {/* <Route path='/dashboard' element={<MainPage />} /> */}
      {/* <Route path="/dashboard/:id" element={<Dashboard />} /> */}
    </Routes>
    </div>
  );
}

export default App;
