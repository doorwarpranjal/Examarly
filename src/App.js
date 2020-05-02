import React from 'react';
import Navbar,{ CustomFooter } from './components/Navbar' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
import Home from './components/Home' ;
import NotFound from './components/NotFound' ;
import { BrowserRouter,Route,Switch} from "react-router-dom";




function App() {
  return (

    <BrowserRouter>
      <div className="App">
      <Navbar brandname='Examarly'/>
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route  component={NotFound} />
      </Switch>

        {/* <CustomFooter brandname='Examearly' /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
