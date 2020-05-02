import React from 'react' ;
import {Link,NavLink} from 'react-router-dom' ;


function Navbar(props) {
  return(

    <div>
    <nav>
       <div className="nav-wrapper z-depth-1">
       
          <Link to='/' className="brand-logo">
          <img src={require('../logotransparent.png') }  className="logo-image"/>
         
         </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
             <li>
                <Link to='/'>
                Home</Link>      
             </li>
             <li>
                <Link to='/contact'>
                Blogs</Link> 
             </li>
             <li>
                <Link to='/about'>
                About</Link> 
             </li>
             <li>
                <Link to='/contact'>
                Contact</Link> 
             </li>
             
          </ul>
       </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
       <li>
          <Link to='/'>
          Home</Link>      
       </li>
       <li>
          <Link to='/'>
          Blogs</Link>      
       </li>
       <li>
          <NavLink to='/about'>About</NavLink>
       </li>
       <li>
          <Link to='/contact'>
          Contact</Link> 
       </li>
    </ul>
 </div>
  
   );
}


export function CustomFooter(props){
  return(

    <div className="row footer"> 
      <div className="col s12 footer-text" >
          <h6>All Rights Reserved by <a href="/author"> <strong>{props.brandname}</strong>  </a></h6>
      </div>
    </div>
  );
}

export default Navbar ;