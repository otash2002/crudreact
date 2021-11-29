import React from 'react';
import {Route,Switch } from 'react-router-dom'

import Home from './component/Home';
import Header from './component/Home';
import News from './component/News';
import Plastic from './component/Plastic';
import Products from './component/Products';
import Tolov from './component/Tolov';
import Valyuta from './component/Valyuta';
import Call from './component/Call'
import Footer from './component/Footer';
import End from './component/End';
import Cabinet from './component/Cabinet';
// import { Carousel } from 'react-carousel-minimal';



 export default function App () {

   return (
     <main className="">
       <Home />,
       <Plastic />,
       <Products />,
       <News />,
       <Valyuta />,
       <Tolov />,
       <Call />,
       <Footer />,
       <End />
       <Switch>
        




       </Switch>

     </main>

  
   );
 }








