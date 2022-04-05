import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav() {
  return(
<>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to='/' id='logo'><img src="./image/rm_logo.png" alt=""  width="22px"/></Link>
    <Link class="navbar-brand mx-2" to='/'>Baba Banarsi</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='Shop'>Shop</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link" to='AboutUs' id="navbarDropdown">About Company</Link>
        </li>
        <li class="nav-item">
          <a href='#' class="nav-link">My Account</a>
        </li>
      </ul>
      <form class="d-flex mx-3">
        <Link to='Login'><button class="btn btn-outline-success mx-3">Login</button></Link> 
        </form>
    </div>
   <a href='#'><FontAwesomeIcon  id='card' icon={faShoppingCart}></FontAwesomeIcon></a>
  </div>
</nav>
</>
  );
}
