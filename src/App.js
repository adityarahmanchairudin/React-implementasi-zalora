import React from 'react';
import Navbar from './state/State';
import Isi from './props/Prop';
import './App.css';


function App() {
  return (
    <div id="wrapper">
    <Navbar/>
    <Isi  menu1="TERBARU" menu2="ZALOCAL" menu3="PAKAIAN"
             menu4="SEPATU" menu5="TAS" menu6="JAM & AKSESORIS"
             menu7="BAJU MUSLIM" menu8="SPORTS" menu9="BATIK"
             menu10="BEAUTY" menu11="BRANDS" menu12="FLAGSHIP STORES"
             menu13="SALE"

             menu14={require('./images/bar1.PNG')}
             menu15={require('./images/bar2.PNG')}
             menu16={require('./images/bar3.PNG')}
             menu17={require('./images/bar4.PNG')}
             menu18={require('./images/diskon_after.PNG')}

             content1={require('./images/slider.gif')}
             content2={require('./images/image22.png')}
             content3={require('./images/logo-1.jpg')}
             content4={require('./images/bank.PNG')}

             brands1={require('./images/logo/zalora.png')}
             brands2={require('./images/logo/guess.png')}
             brands3={require('./images/logo/cotton.png')}
             brands4={require('./images/logo/mango.png')}
             brands5={require('./images/logo/keds.png')}
             brands6={require('./images/logo/levis.png')}
             brands7={require('./images/logo/puma.png')}
             brands8={require('./images/logo/addidas.png')}
             brands9={require('./images/logo/casio.png')}
             brands10={require('./images/logo/vans.png')}
             brands11={require('./images/logo/river.png')}
             brands12={require('./images/logo/sb.png')}
             brands13={require('./images/logo/nike.png')}
             brands14={require('./images/logo/raven.png')}

             model1={require('./images/promo1.PNG')}
             model2={require('./images/promo2.PNG')}
             model3={require('./images/promo3.PNG')}

             modela="Semua produk fashion untuk jiwa stylish Anda di bawah Rp188.000"
             modelb="Temukan pilihan kemeja santai hingga formal disini"
             modelc="Style tas paling populer untuk menemani hari-hari kasual Anda."
        />
    </div>
  );
}

export default App;
