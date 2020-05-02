import React from 'react' ;

const About = () => {
return (
  <div>
   <div className="row center"> 
  <div className="col s12 m6 l6 about-page-image-1"></div>

  <div className="col s12 m6 l6 about-page-text-div"> 
  
  <h3>About Us ?</h3>  
  <h5> We are a Bunch of Passionate Students who are trying to solve the problems faced by
     the Non-Tech students</h5>
  </div>
</div>

<hr />

  <div className="row center"> 
  <div className="col s12 m6 l6 about-page-text-div"> 
  <h3>Why Examarly ?</h3>  
  <h5>             We are a bunch of people who have struggled and are still struggling
            with lack of information, misinformation, lack of content and
            guidance. <br /> <br /> <br /> We are committed to solving these and other problems that
            people after us are going to face.</h5>
  </div>
  <div className="col s12 m6 l6 about-page-image-2">   </div>
  </div>


    <ul class="social-media-list center">
      <li>
        <a href="#" target="_blank" class="contact-icon">
          <i class="fab fa-facebook" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" class="contact-icon">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" class="contact-icon">
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" class="contact-icon">
          <i class="fab fa-youtube" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
);
}

export default About ;