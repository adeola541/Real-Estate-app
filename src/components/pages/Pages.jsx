import React from "react";
import Header from "../common/header/header";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "../home/Home"
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Service from "../service/Service";
import blog from "../blogs/blog";
import Contact from "../contact/contact";
// import Location from "../location/Location";

const Pages = () =>{
               return <>
               <Router>
                 <Header />
        <Switch>
          <Route  exact path='/' component={Home} /> 
          <Route  exact path='/about' component={About} /> 
          <Route  exact path='/service' component={Service} /> 
          <Route  exact path='/blog' component={blog} /> 
          <Route  exact path='/contact' component={Contact} /> 
          {/* <Route  exact path='/location' component={Location} />  */}




        </Switch>
        <Footer />
    </Router>
</>
}

export default Pages