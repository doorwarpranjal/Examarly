import React from 'react' ;

const Contact = () => {
return (
  <div className="contact-page-container">
    <div className="row">
      <div className="col s12 m6 l6"> </div>
      <div className="col s12 m4 l4">
        <h2 className="center"> Contact Us </h2>
        
        <h5 className="center">
          
          Hey, Drop us a Message ! We would love to listen from you !
        </h5>
        <form className=" Contact-form">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <input type="text" />
          <input className="center" type="submit" placeholder="Submit" />
        </form>

        <ul class="contact-list">
          <li class="list-item">
            <i className="material-icons left contact-page-icons">place</i>
            <span class="contact-text place">New Delhi || IN</span>
          </li>

          <li class="list-item">
            <i className="material-icons left contact-page-icons">phone</i>
            <span class="contact-text phone">
              <a href="tel:1-212-555-5555" title="Give me a call">
                +91 8871351940
              </a>
            </span>
          </li>

          <li class="list-item">
            <i className="material-icons  left contact-page-icons">email</i>
            <span class="contact-text gmail">
              <a href="mailto:#" title="Send me an email">
                help@examarly.com
              </a>
            </span>
          </li>
        </ul>


        <ul class="social-media-list center">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-youtube" aria-hidden="true"></i></a>
          </li>
        </ul>
        


      </div>
    </div>
  </div>
);
}

export default Contact ;