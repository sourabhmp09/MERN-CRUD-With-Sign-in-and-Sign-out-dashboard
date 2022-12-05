import React ,{useEffect} from "react"
import { Link ,useNavigate} from "react-router-dom";
   const Nav =()=>{

const auth = localStorage.getItem('user');
 const navigate=useNavigate();     
 const Logout=()=>{
    localStorage.clear();
    navigate('/SignUP')
                  }            

    return (
        <div>
            <img alt="logo" className="logo"
            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"/>
         { auth?
            <ul className="nav-ul">
                <li> <Link to="/">HOME</Link></li>
                <li> <Link to="/add">Add Product</Link></li>
                <li> <Link to="/">Updat Update</Link></li>
                
                   
           <li><Link onClick={Logout} to='/Signup' className="logout">logout ({ JSON.parse(auth).name}) </Link></li>
            </ul>
            :
                <ul  className="nav-ul nav-right">
                    <li><Link to="/SignUp">SignUp</Link></li>
                    <li> <Link to='/Login'>Login</Link></li>
               </ul>
         }
        </div>
    )
}

export default Nav;


