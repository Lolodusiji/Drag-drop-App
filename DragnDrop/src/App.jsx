import {Route, Routes} from 'react-router-dom';
import Signin from './Signin/Signin';
import MainPage from './Main/MainPage';
// import Dashboard from './Pages/Dashboard/Dashboard';


function App() {

  return (
    <>
      <Routes>
    <Route path='/' element={<Signin/>} />
    <Route path='/' element={<MainPage/>} />
    {/* <Route path='/dashboard/:id' element={<Dashboard/>} /> */}

      </Routes>
    </>
  )
}

export default App
