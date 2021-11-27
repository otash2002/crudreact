import "./valyuta.css"
export default function Valyuta () {
  return(
    <div className="row valyuta containere">
      <h3>Курсы валют</h3>
      <div className="col-8">
        <table id="customers">
          <thead>
            <tr>
              <th scope="col">Валюты</th>
              <th scope="col">Курс ЦБ </th>
              <th scope="col">Покупка</th>
              <th scope="col">Продажа</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">USD</td>
              <td>10 170.00</td>
              <td>84.00</td>
              <td>10 170.76</td>
            </tr>
            <tr>
              <td scope="row">EUR</td>
              <td>11 424.95</td>
              <td>99 00.00</td>
              <td>11 500.00</td>
            </tr>
            <tr>
              <td scope="row">RUB</td>
              <td>145.39</td>
              <td>11 700.00</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td scope="row">GBP</td>
              <td>12 730.48</td>
              <td>110.00</td>
              <td>12 600.00</td>
            </tr>
            <tr>
              <td scope="row">CHF</td>
              <td>10 660.40</td>
              <td>10 800.00</td>
              <td>10 700.00</td>
            </tr>
            <tr>
              <td scope="row">JYP</td>
              <td>94.58</td>
              <td>10 220.00</td>
              <td>96.00</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className="col-4 valyu_all">
        <div className="valyur-all">
          <h3>Конверт валют</h3>

        </div>
        <div className="sotp">
          <div className="pul">
            <input
              placeholder="1"
            />
            
          </div>
          <div>
            <select>
              <option>USD</option>
              <option>EUR</option>
              <option>RUB</option>
            </select>
          </div>

        </div>
        <div className="sotp_2">
          <div className="pul">
            <input
            placeholder="" 
            />
            
            
          </div>
          <div>
            <select>
              <option>USD</option>
              <option>EUR</option>
              <option>RUB</option>
            </select>
          </div>
        </div>
        <div className="sotp_olish">
          <input type="radio" />
          <label>Sotish</label>
        </div>
        <div className="sotp_olish">
          <input type="radio" />
          <label>Sotib olish</label>
        </div>

      </div>
      


    </div>
  )
}