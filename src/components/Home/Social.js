import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFill3SquareFill } from "react-icons/bs";
import { faFacebook,faGithub ,faInstagramSquare} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Social = () => {
  return (
    
    <div className="home__social">
      <div id="middle_heading">  
         <a href="https://www.facebook.com/" target="_blank" className="home__social-icon" >
 
             <FontAwesomeIcon icon={faFacebook}  />
              </a>    
      </div>
      <div id="middle_heading">  
          <a href="https://github.com/" target="_blank"  className="home__social-icon" data-aos="fade-left">
 
            <FontAwesomeIcon icon={faGithub} />
             </a>    
        </div>
      <div id="middle_heading">  
         <a href="https://www.instagram.com/" target="_blank"  className="home__social-icon">
 
          <FontAwesomeIcon icon={faInstagramSquare} />
          </a>    
      </div>
            
    </div>
  );
};

export default Social;
