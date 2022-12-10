import React from "react";
import s from './Header.module.css';
import { Link } from "react-router-dom";

const Header = (props) => {
 
  // useEffect(() => {
  //   instance.get(`auth/me`).then( response => {
  //       if (response.data.resultCode === 0) {
  //         let {id, email, login} = response.data.data
  //         props.setAuthUserData(id, email, login)
  //       }
  //     })}, []);

  return (
        <header className = {s.head}>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/008/977/302/small/simple-logo-in-the-shape-of-a-mountain-panorama-themed-logo-vector.jpg'></img>
          <div className = {s.loginBlock}>
            { props.isAuth 
              ? props.login
              : <Link to="/login">login</Link>}
          </div>
        </header>
  )
}
export default Header;