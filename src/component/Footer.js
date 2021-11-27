import "./footer.css"
export default function Footer () {
  return(
    <div className="row foot containere">
      <img src="./images/map uzbekistan 1.png" />
      <div className="col-3 foot_text">
        <p>Частным лицам</p>
        <ul>
          <li>Кредиты</li>
          <li>Пластиковые карты</li>
          <li>Вклады</li>
          <li>Денежные переводы</li>
        </ul>

      </div>
      <div className="col-3 foot_text">
        <p>Бизнесу</p>
        <ul>
          <li>Операции в иностранной валюте</li>
          <li>E-POS терминалы</li>
          <li>
            Расчетно-кассовое обслуживание
            </li>
          <li>
            Мобилный банкинг
            </li>
          <li>
            Пластиковые карты
            </li>
          <li>
            нформация о предоставляемых услугах
            </li>
        </ul>

      </div>
      <div className="col-3 foot_text">
        <p>Финансовым институтам</p>
        <ul>
          <li>Корреспондентские отношения</li>
          <li>Внешнеэкономическая деятельность</li>
        </ul>

      </div>
      <div className="col-3 foot_text">
        <p>Адресс</p>
        <ul>

          <li>
            Узбекистан, г.Коканд, Ферганская <br/> область, ул. Шохрухобод
            </li>
          <li>
            info@universalbank.uz <br/>
            Время выполнения: 0.2460 сек.<br />
            Факс: +998 73 542-05-78
            </li>
          <li> Телефон доверия<br />
            АКБ "Универсал банк":<br />
            +998 78 150-39-90</li>
          <li> ЦБ РУз:<br />
            +998 71 200-00-44</li>
        </ul>

      </div>
    </div>


  )
}