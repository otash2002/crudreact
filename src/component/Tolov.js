import "./tolov.css"
export default function Tolov() {
  return(
    <div className="containere tolov">
      <div className="tolov_text">
        <h3>Моментальные платежи</h3>
        <p>Bizzi bu xizmat turimiz bilan siz lyuboy payt lyuboy joyga to`lov <br/>
         qilsangiz boladi, xotinni mahriniyam shu joydan bersangiz bo`ladi</p>
      </div>
      <div className="row tolov-row">
        <div className="col-3 tolov_img">
          <div className="tolov-content">
            <img src="./images/p2p 1.png" className="money_img" alt="save-money" />
            <span>Переводы <br/>
              с карты на карту</span>
          </div>
          <span className="hick"> <img src="./images/Rectangle 13.png" /> </span>

        </div>
        <div className="col-3 tolov_img">
          <div className="tolov-content">
            <img src="./images/loan 1.png" className="money_img" alt="accounting" />
            <span>Погашение <br/>
              кредитов</span>

          </div>
          <span className="hick"> <img src="./images/Rectangle 13.png" /> </span>

        </div>
        <div className="col-3 tolov_img">
          <div className="tolov-content">
            <img src="./images/loan 1.png" className="money_img" alt="accounting" />
            <span>Мобильные <br/>
              операторы</span>
          </div>
          <span className="hick"> <img src="./images/Rectangle 13.png" /></span>
        </div>
        <div className="col-3 tolov_img">
          <div className="tolov-content">
            <img src="./images/Group (1).png" alt="accounting" />
            <span>Другие <br/>
              категории</span>
          </div>

        </div>
      </div>

    </div>
  )
}