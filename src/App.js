import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <div className = 'app-wraper'>
      <Header />
      <Navbar state={props.state.friendsNavbar} />
      <div className = 'app-wraper-content'>
      <Routes>
        <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
        <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
        <Route path='/dialogs/*' element={<Dialogs />} />
      </Routes>
      </div>
    </div>
  )  
}

export default App;
