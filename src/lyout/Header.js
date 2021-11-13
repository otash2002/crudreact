// import { Link } from 'react-router-dom'
import './heafer.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  const [search, setSearch] = useState(false);

  const searchClick = () => {
    search ? setSearch(false) : setSearch(true)
    console.log('pk')
    

  }
  return (
    <>
 
    
    <div className="containere">
      <header> 

       <div className="row">

          <div className="col-1">
              <Link to="/">
            <div className="logo">
              <img src="https://kun.uz/assets/4da8d774/img/kun-uz-logo.svg" alt="Logo" />
            </div>
               </Link>
           </div>

           <div className="col-8 mt-1">
            <div className="navbar">
                <form className={search ? "fa-search_not" : "fa-search_clik"} >
                  {/* <button></button> */}
                  <input className="form-control"placeholder="Qidiruv" />
                </form>
                <nav className={search ? "fa-search_clik" : "fa-search_not"}>
                <ul>
                    <li className="nav-item"> <Link to="/ozbekiston">O‘ZBEKISTON</Link></li>
                    <li className="nav-item"> <Link to="/jahon">JAHON</Link></li>
                    <li className="nav-item"> <Link to="/iqstisod">IQTISODIYOT</Link></li>
                    <li className="nav-item"> <Link to="/jamiyat">JAMIYAT</Link></li>
                    <li className="nav-item"> <Link to="/fan-texnika">FAN - TEXNIKA</Link></li>
                    <li className="nav-item"> <Link to="/sport">SPORT</Link></li>
                  <li className="nav-item"> <Link to="/">LIGHT</Link></li>
                    <li className="nav-item"> <Link to="/biznez">BUSINESS CLASS</Link></li>
                    <li className="nav-item"> <Link to="/audio">AUDIO</Link></li>
                </ul>
              </nav>
            </div>
           </div>

             <div className="col-3 ">
            <div className="cart-login-search">
              <ul>
                <li className="">
                  <Link to="/" className="gaz-btn">
                    <img src="https://storage.kun.uz/source/banners/2021/07_05/logo_1_neft.svg" alt="gaz" width="130px" />
                  </Link>
                </li>
                  <select className="language">
                      {/* O‘zbekcha <i class="fas fa-chevron-down"></i> */}
                      <option>O'zbekcha</option>
                      <option>Русский</option>
                      <option>English</option>
                
                </select>
                  <li className="search-i">
                    <span className={search ? "fa-search_clik" : "fa-search_not"}>
                      <i onClick={searchClick} class="far fa-search"></i>

                    </span>
                    <span className={search ? "fa-times_not" : "fa-times_clik"}>

                      <i onClick={searchClick} class="fas fa-times"></i>
                    </span>
                </li>
              </ul>
            </div>
        </div>

       </div>
      </header>
    </div>
    <div className="containere">
      <div className="row huhudlar">

        <div className="col-1 p-0">
          <div className="hudud">
            Hududlar
          </div>
          </div>
          <div className="col-11">
            <div className="viloyatlar">
            <ul>
                <li> <Link to="/toshkent">Toshkent</Link>  </li> 
                <li> <Link to="/qoraqalpoq">Qoraqalpog‘iston</Link> </li>
                <li> <Link to="/andijon">Andijon</Link> </li>
                <li> <Link to="/fargona">Farg‘ona</Link> </li>
                <li> <Link to="/namangan">Namangan</Link> </li>
                <li> <Link to="/samarqand">Samarqand</Link> </li>
                <li> <Link to="/buxoro">Buxoro</Link> </li>
                <li> <Link to="/xorazm">Xorazm</Link> </li>
                <li> <Link to="/surxon">Surxondaryo</Link> </li>
                <li> <Link to="/qashqadaryo">Qashqadaryo</Link> </li>
                <li> <Link to="/jizzax">Jizzax</Link> </li>
                <li> <Link to="/sirdaryo">Sirdaryo</Link> </li>
                <li> <Link to="/toshkentvil">Toshkent vil.</Link> </li>
                <li> <Link to="/navoiy">Navoiy</Link> </li>
            </ul>
            </div>
          </div>
        

      </div>

    </div>
    {/* <div className="containere">
      <div className="row">
        <div className="main col-12">
          <div className="row">
            <div className="col-9 p-0 mt-3">
              <div className="top-news">
                <div className="top-news_big col-12">
                  <div className="row">
                    <div className="big-news_img col-6 p-0">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/Spmi9IQeKscdxzbt0Lniwx5c5RFS7HZX_medium.jpg" alt="img" width="500px"/>
                    </div>
                    <div className="big-news_content col-6">
                      <div className="news-text">
                          <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                          <h2>
                            Shavkat Mirziyoyev O‘zbekistonda kuzatilgan qum bo‘ronlari haqida gapirdi
                          </h2>
                          <p>Senat binosida saylangan prezident Shavkat Mirziyoyevning inauguratsiya marosimi bo‘lib o‘tmoqda. Kun.uz muxbiri xabariga ko‘ra, Shavkat Mirziyoyev tadbir davomida nutq so‘zlamoqda.</p>         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 top-news_small_item mt-4 mb-3">
                <div className="row">
                  <div className="col-6 small-news">
                    <div className="row">
                      <div className="small-news col-4 p-0">
                          <img src="https://storage.kun.uz/source/thumbnails/_medium/7/Spmi9IQeKscdxzbt0Lniwx5c5RFS7HZX_medium.jpg"  alt="prizident" width="170"/>
                      </div>
                      <div className="small-news_content col-8 ">
                          <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                          <h5>Shavkat Mirziyoyev O‘zbekistonda kuzatilgan qum bo‘ronlari haqida gapirdi</h5>
                          <hr/>
                      </div>
                      <div className="small-news col-4 p-0">
                          <img src="https://storage.kun.uz/source/thumbnails/_medium/7/UGyooEvby_TC7KvqJeJ62gER0UBcraAN_medium.jpg"  alt="prizident" width="170"/>
                      </div>
                      <div className="small-news_content col-8 ">
                          <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                          <h5>Yo‘l qoidalariga amal qilish vojib – Islomda yo‘l harakati fiqhi kitobi muallifi bilan suhbat</h5>
                          <hr/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 small-news">
                    <div className="row">
                      <div className="small-news col-4 p-0">
                          <img src="https://storage.kun.uz/source/thumbnails/_medium/7/8kCds5lER5MSkMddGixix0-ahST1b1mf_medium.jpg"  alt="prizident" width="170"/>
                      </div>
                      <div className="small-news_content col-8">
                          <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                          <h5>Xavfsizlikni ta'minlash chorasi bu qadar qo‘pol bo‘lmasligi kerak –  IMEI haqida</h5>
                          <hr/>
                      </div>
                      <div className="small-news col-4 p-0">
                          <img src="https://storage.kun.uz/source/thumbnails/_medium/7/AfU6gvCk2fIuhNBVe1_6yYzl9xryxDoz_medium.jpg"  alt="prizident" width="170"/>
                      </div>
                      <div className="small-news_content col-8">
                          <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                          <h5>O‘zbekistonda konstitutsiyani takomillashtirish masalasini ko‘rib chiqish rejalashtirilmoqda</h5>
                          <hr/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="editor-choice">
                <div className="block-title row containere">
                  <a href="$" className="firs"><span>Muharrir tanlovi</span></a>
                </div> 
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="news">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/VPadjZ6Hz7p7gGlC6Cj-dLYpGFD0ICu3_medium.jpg"  alt="rasm" width="320" height="203"/>
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h4>Telegram'ni bloklashga urinish: Obro‘si to‘kilgan hukumat, qovun tushirgan vazirlik va ishdan ketgan uch amaldor</h4>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="news">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/tT1fs3V06AhBUsLesoM6ghTMiEbiEGlU_medium.jpg"  alt="rasm" width="320" height="203"/>
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h4>Ko‘z xiralashishi sabablari va uning oldini olish. Shifokor bilan suhbat</h4>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="news">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/Qm8nfF33RrnIhLUEeVOAWXBgwvOrtG6l_medium.jpg"  alt="rasm" width="305" height="203"/>
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h4>Biznes rivoji uchun Kun.uz'dagi imkoniyatlar </h4>
                      </div>
                    </div>
                  </div>

              </div>
            </div>








            <div className="col-3 new-title p-0 mt-3">
              <div className="row col-12 pl-4">
                <div className="block_title row col-12">
                    <a href="$" className="firs"><span>So'ngi yangiliklar</span></a>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
                <div className="block_title_content col-12 p-0">
                    <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                    <h6> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</h6>
                    <hr/>
                </div>
              
                  <a href="$" className="main-btn">Ko'proq yangiliklar<i class="fas fa-arrow-right"></i></a>

              </div>

            </div>

          </div>
          

        </div>
      

      </div>

    </div> */}

    </>

   
    
    
  )
}