import React from 'react';
import Footer from './lyout/Footer';
import Header from './lyout/Header';
import {Route,Switch } from 'react-router-dom'
import Home from './component/Home';
import Ozbek from './component/Ozbek';
import Jahon from './component/Jahon';
import Iqtisod from './component/Iqtisod';
import Jamiyat from './component/Jamiyat';
import Fan from './component/Fan';
import Sport from './component/Sport';
import Biznes from './component/Biznes';
import Audio from './component/Audio';
import Toshkent from './viloyatlar/Toshkent';
import Qoraqalpoq from './viloyatlar/Qoraqalpoq';
import Andijon from './viloyatlar/Andijon';
import Fargona from './viloyatlar/Fargona';
import Namangan from './viloyatlar/Namangan';
import Samarqand from './viloyatlar/Samarqand';
import Buxoro from './viloyatlar/Buxoro';
import Xorazm from './viloyatlar/Xorazm';
import Surxon from './viloyatlar/Surxon';
import Qashqadaryo from './viloyatlar/Qashqadaryo';
import Jizzax from './viloyatlar/Jizzax';
import Sirdaryo from './viloyatlar/Sirdaryo';
import Toshvil from './viloyatlar/Toshvil';
import Navoiy from './viloyatlar/Navoiy';
import Video from './component/Video';


 export default function App () {



     return (
       <>
         <Header />
         <main className="content">
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/ozbekiston" component={Ozbek} />
             <Route path="/jahon" component={Jahon} />
             <Route path="/iqstisod" component={Iqtisod} />
             <Route path="/jamiyat" component={Jamiyat} />
             <Route path="/fan-texnika" component={Fan} />
             <Route path="/sport" component={Sport} />
             <Route path="/biznez" component={Biznes} />
             <Route path="/audio" component={Audio} />
             <Route path="/toshkent" component={Toshkent} />
             <Route path="/qoraqalpoq" component={Qoraqalpoq} />
             <Route path="/andijon" component={Andijon} />
             <Route path="/fargona" component={Fargona} />
             <Route path="/namangan" component={Namangan} />
             <Route path="/samarqand" component={Samarqand} />
             <Route path="/buxoro" component={Buxoro} />
             <Route path="/xorazm" component={Xorazm} />
             <Route path="/surxon" component={Surxon} />
             <Route path="/qashqadaryo" component={Qashqadaryo} />
             <Route path="/jizzax" component={Jizzax} />
             <Route path="/sirdaryo" component={Sirdaryo} />
             <Route path="/toshkentvil" component={Toshvil} />
             <Route path="/navoiy" component={Navoiy} />
             <Route path="/video" component={Video} />

           


           </Switch>

         </main>
         <Footer />

  
       </>
     );
  }





