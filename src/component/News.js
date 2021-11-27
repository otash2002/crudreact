import { Link } from "react-router-dom"
import "./news.css"
export default function News () {
  return(
    <div className="row news containere">
      <div className="col-6 news_content">
        <h3>News</h3>
        <p>АКБ «Универсалбанк» занимает прочные конкурентные <br/> позиции на всех сегментах рынка банковских... </p>
        <span>26.11.2021</span>
        <p>Global Banking & Finance Review — это авторитетный <br/> 
          британский финансовый портал, который ежегодно <br />
          оценивает работу банков разных стран мира по нескольким <br />
           критериям и присуждает награды в соответствующих...</p>
        <span>26.11.2021</span>
        <p>АКБ «Универсалбанк» с радостью сообщает об открытии <br />
          нового филиала в Зангиотинском районе Ташкентской <br />
           области по адресу улица Мустакиллик, 24....</p>
        <span>26.11.2021</span>

        <div>

        <a href="@">Все новосты</a>
        </div>
      </div>
      <div className="col-6 news_img">
        <img src="./images/phone-on-hand 2.png" alt="phone"          />
        <div>
          <img src="./images/app-store.png" alt="app-store"   />
          <img src="./images/google play.png" alt="app-store"   />
        </div>

      </div>

    </div>
  )
}