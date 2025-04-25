import {NavLink} from "react-router-dom";
import style from "./Header.module.scss";
import logo from '../../assets/logo1.png';
import {useState} from "react";
function Header() {

    const [activeStyle, setActiveStyle] = useState(0);
    const changeStyle = (number: number)=>{
        setActiveStyle(number);
    }


    return (
        <div className={style.header}>
                <img className={style.logo} src={logo} alt="logo" />
            <nav className={style.nav}>
                <NavLink onClick={()=>{changeStyle(0)}} className={`${style.link} ${activeStyle===0 ? style.active : ''}` } to={'/'}>DashBoard</NavLink>
                <NavLink onClick={()=>{changeStyle(1)}} className={`${style.link} ${activeStyle===1 ? style.active : ''}`} to={'/bonds'}>Облигации</NavLink>
            </nav>
        </div>
    );
}

export default Header;