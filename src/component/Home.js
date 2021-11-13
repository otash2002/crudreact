import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return(

    <div className="containere">
      <div className="row">
        <div className="main col-12">
          <div className="row">
            <div className="col-9 p-0 mt-3">
              <div className="top-news">
                <div className="top-news_big col-12">
                  <div className="row">
                    <div className="big-news_img col-6 p-0">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/7/Spmi9IQeKscdxzbt0Lniwx5c5RFS7HZX_medium.jpg" alt="img" width="500px" />
                    </div>
                    <div className="big-news_content col-6 pl-1">
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
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/Spmi9IQeKscdxzbt0Lniwx5c5RFS7HZX_medium.jpg" alt="prizident" width="170" />
                      </div>
                      <div className="small-news_content col-8 ">
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h5>Shavkat Mirziyoyev O‘zbekistonda kuzatilgan qum bo‘ronlari haqida gapirdi</h5>
                        <hr />
                      </div>
                      <div className="small-news col-4 p-0">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/UGyooEvby_TC7KvqJeJ62gER0UBcraAN_medium.jpg" alt="prizident" width="170" />
                      </div>
                      <div className="small-news_content col-8 ">
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h5>Yo‘l qoidalariga amal qilish vojib – Islomda yo‘l harakati fiqhi kitobi muallifi bilan suhbat</h5>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 small-news">
                    <div className="row">
                      <div className="small-news col-4 p-0">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/8kCds5lER5MSkMddGixix0-ahST1b1mf_medium.jpg" alt="prizident" width="170" />
                      </div>
                      <div className="small-news_content col-8">
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h5>Xavfsizlikni ta'minlash chorasi bu qadar qo‘pol bo‘lmasligi kerak –  IMEI haqida</h5>
                        <hr />
                      </div>
                      <div className="small-news col-4 p-0">
                        <img src="https://storage.kun.uz/source/thumbnails/_medium/7/AfU6gvCk2fIuhNBVe1_6yYzl9xryxDoz_medium.jpg" alt="prizident" width="170" />
                      </div>
                      <div className="small-news_content col-8">
                        <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                        <h5>O‘zbekistonda konstitutsiyani takomillashtirish masalasini ko‘rib chiqish rejalashtirilmoqda</h5>
                        <hr />
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
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/7/VPadjZ6Hz7p7gGlC6Cj-dLYpGFD0ICu3_medium.jpg" alt="rasm" width="320" height="203" />
                      <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                      <h4>Telegram'ni bloklashga urinish: Obro‘si to‘kilgan hukumat, qovun tushirgan vazirlik va ishdan ketgan uch amaldor</h4>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="news">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/7/tT1fs3V06AhBUsLesoM6ghTMiEbiEGlU_medium.jpg" alt="rasm" width="320" height="203" />
                      <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                      <h4>Ko‘z xiralashishi sabablari va uning oldini olish. Shifokor bilan suhbat</h4>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="news">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/7/Qm8nfF33RrnIhLUEeVOAWXBgwvOrtG6l_medium.jpg" alt="rasm" width="305" height="203" />
                      <span><i class="fas fa-calendar-day"></i> 16:12 / 06.11.2021 </span>
                      <h4>Biznes rivoji uchun Kun.uz'dagi imkoniyatlar </h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>








            <div className="col-3 new-title p-0 mt-3 ">
              <div className="row col-12 pl-4">
                <div className="block_title row col-12">
                  <a href="$" className="firs"><span>So'ngi yangiliklar</span></a>
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <div className="block_title_content col-12 p-0">
                  <span><i class="fas fa-calendar-day"></i> 16:12 </span>
                  <p> Olimpiya va paralimpiya zaxiralari kollejlari tashkil etiladi</p>
                  <hr />
                </div>
                <Link to="/yangiliklar" className="main-btn">Ko'proq yangiliklar<i class="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row dolzarb">
            <a href="$" className="firs"><span>Dolzarb xabarlar</span></a>
        <div className="main col-12">
          <div className="row">
            <div className="col-6 p-0 mt-3">
              <div className="top-news">
                <div className="top-news_big col-12">
                  <div className="row">
                    <div className="big-news_img col-12 p-0">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/7/o8YlX6sFBgea7sf6Q1GPpniSMK1prwGy_medium.png" alt="img" width="660px" height="420px" />
                    </div>
                    <div className="big-news_content col-12 p-0">
                      <div className="xabarlar-text">
                        <h2>
                          Belarus va Polsha chegarasida yuzlab migrantlar to‘plangan. Varshava harbiylarni jangovar shay holatga keltirdi
                        </h2>
                        <p> Belarus hukumati yana bir bor Varshavani noinsoniylikda aybladi, Polsha mudofaa vazirligi esa mamlakat chegaralari himoya qilinishini ma'lum qildi.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 new-title p-0 mt-3">
              <div className="row col-12 pl-3">
               
                <div className="col-6 ">
                  <div className="xabarlar_text">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/7/bCfvd13WGkg9HULkrEBsWINvzS3Ba5Yz_medium.jpg" alt="rasm" width="305" height="203" />
                    <h4>Yevropada hafta o‘yinlari. Shomurodovning gol va pasi Mourinoni qutqarolmadi, Ispaniyada dahshatli kambeklar</h4>
                    <a href="$">Sport</a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="xabarlar_text">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/7/dThqA5nU1rU36Hw7onD6UtPWqNDvZVWo_medium.jpg" alt="rasm" width="305" height="203" />
                    <h4>Toshkentdagi Magic City'da ommaviy tartibsizlik yuz berdi</h4>
                    <a href="$">O'zbekiston</a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="xabarlar_text">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/7/n9VH_N72YYizG7VqqHYCVeIkUpKKaQJd_medium.jpg" alt="rasm" width="305" height="203" />
                    <h4>«Uyida chaksa uni yo‘q, tom boshida qo‘sh tandir» - yozuvchi Ulug‘bek Hamdam Toshkent viloyatida qurilishi rejalangan haykal haqida </h4>
                    <a href="$">O'zbekiston</a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="xabarlar_text">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/7/ewGsOGLE7qg62vUR7RtmV0t7YXntWUOD_medium.jpg" alt="rasm" width="305" height="203" />
                    <h4>Manba: Navoiy viloyati hokimi ishdan olingan </h4>
                    <a href="$">O'zbekiston</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row maqolalar">
        <a href="$" className="firs"><span>Maqolalar</span></a>
        <div className="maqola-main col-12">
          <div className="row">
            <div className="col-4 maqola p-0">
              <div className="maqola_img">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/7/8kCds5lER5MSkMddGixix0-ahST1b1mf_medium.jpg" alt="rasm" width="440" height="270" />
              </div>
              <div className="maqola_text">
                <a href="$">Хавфсизликни таъминлаш чораси бу қадар қўпол бўлмаслиги керак – Сиёсатшунос телефонларни IMEI рўйхатидан ўтказиш ҳақида</a>
                <p>Сиёсатшунос Камолиддин Раббимов мобил телефонларни IMEI рўйхатидан ўтказиш Ўзбекистон обрўси учун фойдадан зарари кўпроқ бўлаётганини, хориждан Ўзбекистонга келувчининг мобил телефон аппаратининг маркаси, модели, параметрлари ёзиб олиниши – эркин дунёда яшаб юрган шахсларнинг зеҳниятига жуда қаттиқ таъсир қилишини таъкидлади.</p>
              </div>
            </div>
            <div className="col-4 maqola ">
               <div className="maqola_img">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/7/KEkqvM8ATd2iTQYU344PeaDBwbfEcF5x_medium.jpg" alt="rasm" width="430" height="270" />
               </div>
              <div className="maqola_text">
                <a href="$">«Фақат оқибатларга қарши курашиб юраверамизми?» – Блогер инсон қадри учун хизмат қилмайдиган қонун ҳақида</a>
                <p>Ҳуқуқшунос ва блогер Хушнудбек Худойбердиев Ўзбекистонда Интернет платформаларининг блокланиши ортидан юқори лавозимли ҳукумат амалдорларини ишдан олиш билан иш битмаслиги ҳақида ёзиб чиқди.</p>
              </div>
            </div>
            <div className="col-4 maqola ">
               <div className="maqola_img">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/7/VPadjZ6Hz7p7gGlC6Cj-dLYpGFD0ICu3_medium.jpg" alt="rasm" width="430" height="270" />
               </div>
              <div className="maqola_text">
                <a href="$">Telegram'ни блоклашга уриниш: Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор</a>
                <p>Вазирлар Маҳкамаси президент билан келишмаган ҳолда ижтимоий тармоқларни блоклаб қўйди. Бундан хабар топган Шавкат Мирзиёев уч нафар юқори лавозимли амалдорни ишдан олди. Kun.uz ҳафта воқеаси хронологиясини тақдим этади.</p>
              </div>
            </div>
            <div className="col-4 maqola p-0">
               <div className="maqola_img">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/7/pCpmooNZt8RYJJTNttBIep8ILtW9dHCC_medium.jpg" alt="rasm" width="430" height="270" />
               </div>
              <div className="maqola_text">
                <a href="$">«Муссолини» Лондонда: мурватлар қаттиқ тортилиб, совринлар келиши бошланадими?</a>
                <p>Санту истеъфога чиқарилгач, кўпчилик бир фамилияни такрорлай бошлади: Конте.</p>
              </div>
            </div>
            <div className="col-4 maqola">
               <div className="maqola_img">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/7/xIpulqWtsHM4X7bNcygHSNct_luCPTsy_medium.jpg" alt="rasm" width="430" height="270" />
               </div>
              <div className="maqola_text">
                <a href="$">«Ҳайдовчилик гувоҳномасини олиш жараёни инсон аралашувисиз, мураккаб ва қиммат бўлиши керак» - Никита Макаренко</a>
                <p>Haydovchilik guvohnomasini olish jarayoni baxsiz hodisalar sonini kamaytirish uchun inson aralashuvisiz, murakkab va qimmat bo‘lishi kerak. </p>
              </div>
            </div>
            <div className="col-4 maqola">
               <div className="maqola_img">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/7/aMKGuC2yDFON5pvystbnadXMb1IlEI2G_medium.jpg" alt="rasm" width="430" height="270" />
               </div>
              <div className="maqola_text">
                <a href="$">Хорижда ҳайдовчилик гувоҳномасини олиш машаққатлари: ўқимаган йиқилади, келишишга имконият йўқ</a>
                <p>Rivojlangan davlatlarda mashina haydash qonun-qoidalarini puxta o‘zlashtirganlargagina haydovchilik guvohnomasi beriladi. Ham O‘zbekistonda, ham chet elda avtomobil haydash guvohnomasini olish jarayonidan bevosita xabardor insonlar o‘z tajribalari bilan o‘rtoqlashishdi.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

   
      {/* <div className="slide">
        <button> 2222 </button>
        <ul> 
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
                
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>
          <li>
            <div className="slide_content">
              <div className="slide_img">
                <img src="https://storage.kun.uz/source/7/HxelfTtkXU0r-PfOLL7HZqdTcrXOqrlP.jpg" alt="rasm" width="300" height="193" />
          
              </div>
              <div className="slide_text">
                <span>Samarqandda Samsung brendshopi tantanali shou bilan ochildi</span>
              </div>
            </div>
          </li>




        </ul>

        <button>222</button>

      </div> */}
      
      
      
      <div className="row klip">
      
        <div className="col-6  klip_maqola">
          <div className="maqola_klip">
            <a href="$" className="firs"><span>Maqolalar</span></a>
          </div>
          <div className="barcha_maqola">
            <a href="$" className="maqola">Barcha maqolalar<i class="fas fa-arrow-right"></i></a>
          </div>

        </div>
        <div className="col-6 klip_maqola">
          <div className="maqola_klip">
            <a href="$" className="firs"><span>Foto yangiliklar</span></a>

          </div>
          <div className="barcha_maqola">
            <a href="$" className="maqola">Barcha maqolalar<i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
    
        <div className="row movie col-12">
         
          <div className="col-6 mb-3">
            <div className="movie_icons">
              <Link to="/video">

                <img src="https://storage.kun.uz/source/7/wiOoAbcOCM2BGFxxmjS4gqyidyGJnKEM.jpg" alt="rasm" width="640px" height="400px" />
              </Link>
              <span>“Siyosatchilar xalq oldida javobgardir” – mutaxassis bilan davlat xizmatchilarini tayyorlash va tanlash tajribasi haqida suhbat</span>
              <Link to="/video">

                 <i class="fal fa-play-circle"></i>
              </Link>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="movie_icons">
              <Link to="/video">

                <img src="https://storage.kun.uz/source/7/Rui0u_vbMuWlIiHM4nnPOY85aabFnncC.jpg" alt="rasm" width="640px" height="400px" />
              </Link>
            <span>Dunyodagi eng katta yaxta e'lon qilindi</span>
             <Link to="/video">

                <i class="fal fa-camera"></i>
             </Link>
            </div>
          </div>
          <div className="col-3 movies-shirt">
            <Link to="/video">

              <img src="https://storage.kun.uz/source/7/NHkBtMcp4QsazGIyweRGNj21qa7XUu0-.jpg" alt="rasm" width="310px" height="190px" />
            </Link>
            <Link to="/video">

            <i class="fal fa-play-circle"></i>
            </Link>
            <div>
              <span>15:00 / 10.11.2021</span>
              <a href="$">O'zbekiston</a>
            </div>
            <Link className="movie-link" to="/video">“Musofir yurtga umid bilan kelgandim” – bemor yurtdoshimiz xorijda qiyin ahvolda qolmoqda</Link>
            

          </div>
          <div className="col-3 movies-shirt">
            <Link to="/video">

              <img src="https://storage.kun.uz/source/7/giv1a6GowBYTVOF9OPOKI8BAuJc1nvK6.jpg" alt="rasm" width="310px" height="190px" />
            </Link>
            <Link to="/video">

            <i class="fal fa-play-circle"></i>
            </Link>
            <div>
              <span>15:00 / 10.11.2021</span>
              <Link to="/video">Jamiyat</Link>
            </div>
            <Link className="movie-link" to="/video">“Musofir yurtga umid bilan kelgandim” – bemor yurtdoshimiz xorijda qiyin ahvolda qolmoqda</Link>

          </div>
          <div className="col-3 movies-shirt">
            <Link to="/video">

              <img src="https://storage.kun.uz/source/7/1xoJNbZJnINUC9TmAufDXoDG_alNWa9t.jpg" alt="rasm" width="310px" height="190px" />
            </Link>
            <Link to="/video">

            <i class="fal fa-camera"></i>
            </Link>
            <div>
              <span>15:00 / 10.11.2021</span>
              <Link to="/video">O'zbekiston</Link>
            </div>
            <Link className="movie-link" to="/video">“Musofir yurtga umid bilan kelgandim” – bemor yurtdoshimiz xorijda qiyin ahvolda qolmoqda</Link>

          </div>
          <div className="col-3 movies-shirt">
            <Link to="/video">

              <img src="https://storage.kun.uz/source/7/czUrjqIskIVkOtkH7MWUPZNEuOr6cYRk.jpg" alt="rasm" width="310px" height="190px" />
            </Link>
            <Link to="/video">

            <i class="fal fa-camera"></i>
            </Link>
            <div>
              <span>15:00 / 10.11.2021</span>
              <Link to="/video">Jahon</Link>
            </div>
            <Link className="movie-link" to="/video">“Musofir yurtga umid bilan kelgandim” – bemor yurtdoshimiz xorijda qiyin ahvolda qolmoqda</Link>

          </div>


        </div>

      </div>

      <div className="row foot-p">
        <div className="col-12">
          <div className="row foot">

            <div className="col-8 foot_content">
              <div className="foot_img">
                <img src="https://kun.uz/assets/cd6ab492/img/banner-logo.svg" alt="rasm" />
              </div>
              <div className="foot-text">

                <h5>Har doim xabardor boʻling!</h5>
                <p>kun.uz mobil ilovalarini koʻchirib oling va barcha yangiliklar siz bilan</p>
              </div>

            </div>
            <div className="col-4">
              <div className="row foot_images">
                <div className="col-6">
                  <img src="https://kun.uz/assets/4da8d774/img/app-store.svg" alt="rasm" />

                </div>
                <div className="col-6">
                  <img src="https://kun.uz/assets/cd6ab492/img/google-play.svg" alt="rasm" />

                </div>
                <div className="col-12">
                  <img className="img-last" src="https://storage.kun.uz/source/banners/2021/09_24/app-gallery.png" alt="rasm" width="200px" />

                </div>

              </div>

            </div>

          </div>


        </div>
      </div>
      
    
    </div>
    


    
  )
}