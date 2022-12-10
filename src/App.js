import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import Login from './components/Content/Login/Login';


const App = (props) => {
  return (
    <div className = 'app-wraper'>
      <HeaderContainer />
      <Navbar />
      <div className = 'app-wraper-content'>
      <Routes>
        
        <Route path='/dialogs' element={<DialogsContainer/>} />
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/users' element={<UsersContainer />} />
        <Route path='/dialogs/*' element={<Dialogs />} />
        <Route path='/login' element={<Login />} />
        
      </Routes>
      </div>
    </div>
  )  
}

export default App;
