import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faPhone, faEnvelopeOpenText, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return( 
  <>

<section class="bottom">
             <footer class="footer">
                 <div class="container">
                     <div class="row">
                         <div class="footer-col">
                             <h4>company</h4>
                             <ul>
                                 <li><a href="#">about us</a></li>
                                 <li><a href="#">our services</a></li>
                                 <li><a href="#">privacy policey</a></li>
                                 <li><a href="#">affiliate program</a></li>
                             </ul>
                         </div>
                         <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">ads</a></li>
                                <li><a href="#">movie related</a></li>
                                <li><a href="#">download related</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Movie review</h4>
                            <ul>
                                <li><a href="https://www.youtube.com">Youtube</a></li>
                                <li><a href="https://www.dailymotion.com/in">dailymotion</a></li>
                                <li><a href="https://zen-keller-ac7886.netlify.app">website</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Contact us</h4>
                        <div class="social-links">
                        <a href='#'><FontAwesomeIcon  id='card' icon={faPhone}></FontAwesomeIcon><h6 id="phoneno">Phone number</h6></a>
                        <a href='#'><FontAwesomeIcon  id='card' icon={faEnvelopeOpenText}></FontAwesomeIcon><h6 id="phoneno">Email id</h6></a>
                        <a href='#'><FontAwesomeIcon  id='card' icon={faMapMarkerAlt}></FontAwesomeIcon><h6 id="phoneno">Address</h6></a>
                        </div>
                        </div>
                     </div>
                 </div>
             </footer> 
        </section>
  </>

  )
}
