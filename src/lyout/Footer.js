import "./footer.css"
export default function Footer() {
  return(
    <div className="containere">
      <div className="row malumotla">
        <div className="col-9 haqida">
          <ul>
            <li><a href="$">Sayt haqida</a></li>
            <li><a href="$">RCC</a></li>
            <li><a href="$">Aloqa</a></li>
            <li><a href="$">Reklama</a></li>
            <li><a href="$">Kun mavzulari</a></li>
            <li><a href="$">Kun.uz Jamoasi</a></li>
          </ul>

        </div>
        <div className="col-3 haqida_img">
          <a>
            <img src="https://kun.uz/assets/cd6ab492/img/18plus-v2.svg"s alt="rasm" />
          </a>
        </div>
      </div>
      <div className="row kun-haqida">
        <div className="kun_text col-8">
          <p> “KUN.UZ” saytida eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.
            <br/>
            Guvohnoma: №0987. Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB EXPERT” MCHJ. Tahririyat manzili: 100043, Toshkent shahri, K. Yormatov koʻchasi, 12-uy. Elektron manzil: info@kun.uz.
            <br/>
            Saytda eʼlon qilinayotgan mualliflik maqolalarida keltirilgan fikrlar muallifga tegishli va ular Kun.uz tahririyati nuqtai nazarini ifoda etmasligi mumkin.
            <br/>
            Ⓣ - maqola va materiallarda qo‘yilgan mazkur belgi ularning tijorat va reklama huquqlari asosida eʼlon qilinganligini bildiradi.
          </p>
        </div>
          <div className="kun_icon col-4">
            <div className="kun-icon">
              <i class="fab fa-youtube"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fas fa-wifi"></i>
            </div>

          </div>


      </div>

    </div>

   
    
  )
}