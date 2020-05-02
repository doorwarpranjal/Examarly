import React,{Component} from 'react' ;
import axios from 'axios' ;


class Home extends Component{




render() {
    

  



return (
  <div>
    <div className="row" >
      <div className="col s12 m12 l12 main-column ">
        <div className="col s12 m12 l12  ">
          <div className=" col s12 m6 l6 brand-text">
            <h1 className="center main-heading"> Examarly</h1>
            <h5 className="center slogan">
              Best Online preparation App. <br /> Learn in a Fun way !{" "}
            </h5>
            <a className="waves-effect waves-light btn call-to-action">
              <i className="material-icons left">call</i>Call Now
            </a>
          </div>
        </div>
      </div>
    </div>


   
      <div className="row">

        <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80" />
                </div>
                <span className="card-title">
                  <a href="#"><h5>5 Ways to Memorize Easily & Efficiently !</h5> </a>
                </span>
                <p>
                I love Examarly's membership — 
                it gives me access to the stories I love by the writers & Books. 
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
                <div className="img-profile"> <img src="https://scontent.fbho1-1.fna.fbcdn.net/v/t1.0-9/p720x720/41177727_1456558767821714_906729959110737920_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=IUN3RbO29qUAX_iDdbB&_nc_ht=scontent.fbho1-1.fna&_nc_tp=6&oh=3793eb3cfbdff7756c7c4caefd927c64&oe=5ECCEF3A"/> <h6> By Pranjal Doorwar </h6></div>
              </div>
            </div>
       </div>


        

       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/2000/1*zMvABB484R9uj33He2-A_w.png" />
                </div>
                <span className="card-title">
                  <h5>How I Learnt About Cryptocurrencies in 2 Months</h5>
                </span>
                <p>
                Blockchain, Cryptocurrency, Bitcoin… those are 3 buzz words we keep hearing about 😬. 
                
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>


       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="
                  https://miro.medium.com/max/1400/1*g4slXvguOTzTbd1blaCpuQ.jpeg" />
                </div>
                <span className="card-title">
                  <h5>Decided to Learn Something Online — Now What?</h5>
                </span>
                <p>
                A strategy for actually getting through that course you just signed up for.
                No more Procastrination.
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>



       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/1400/0*v-2G45CpWvbFUgX1" />
                </div>
                <span className="card-title">
                  <h5>How To Learn Something Every Day Easily</h5>
                </span>
                <p>
                A 4-step process for practical, daily learning to help you learn any skill Easily.
                Without much efforts
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>



       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/700/0*H05DN-vpwlujdFpm" />
                </div>
                <span className="card-title">
                  <h5>How To Follow Your Boss Even When Things Are Uncertain</h5>
                </span>
                <p>
                Learning to become indispensable in your business despite the chaos.
                Learn How to be more patient
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>


       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/1000/1*b-Q3_isR-6iVYOlIOMsbAQ.jpeg" />
                </div>
                <span className="card-title">
                  <h5>Being in Lockdown Showed Me How Selfish I Can Be</h5>
                </span>
                <p>
                Winning the fight against unmet expectations.This quarantine learn how to 
                imporve for better
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>






      
     </div>
  </div>
);
        }
}

export default Home ;