import "./home.css"
import { Link } from "react-router-dom"
import Slider from "./Slider"
export default function Home () {

  return(
    
  <>
    

      <nav class="navbar navbar-expand-lg navbar-dark containere">
        <div className="navbar-brand">
          <img src="./images/logo-ubank 1.png" alt="rasm1" />
        </div>
			<button class="navbar-toggler ml-auto bg-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class=" mr-5 collapse navbar-collapse p-3" id="navbarTogglerDemo01">
				<ul class="navbar-nav mt-2 mt-lg-0 align-items-center">
					<li class="nav-item">
              <Link class="nav-link text-white" to="/">Частным лицам</Link>
					</li>
					<li class="nav-item">
              <Link class="nav-link text-white" to="/">Бизнес</Link>
					</li>
					<li class="nav-item">
              <Link class="nav-link text-white" to="/">Финансовым институтам</Link>
					</li>
				</ul>
          <div className="menu">
            <img src="./images/Group.png"  alt="rasm" />
              <span> ENG </span>
              <img src="./images/cabinet.png"  alt="rasm" />
              <img src="./images/cil_hamburger-menu.png" alt="rasm"  />


            </div>
			</div>
		</nav>
    <header className="containere">
      <div className="kredit">
        <div>

        <ul>
            <li><Link>Кредиты</Link></li>
            <li><Link> Пластиковые карты  </Link></li>
            <li><Link>Вклады</Link></li>
            <li><Link>Оплата и платежы</Link></li>
            <li><Link>Денежные переводыa</Link></li>
        </ul>

        </div>
        <div>
        <button>Интернет банкинг</button>
        </div>

      </div>


    </header>

    <div className="visa-electronic containere">
      <Slider />
      

      

    </div>

    <div className="deposits containere">
      <div className="row moneys">
        <div className="col-3 save-money">
          <div>
            <img src="./images/save-money 1.png" className="money_img" alt="save-money" />
            <span>Deposits</span>
          </div>
            <span className="hick"> <img src="./images/Rectangle 13.png" /> </span>

        </div>
        <div className="col-3 save-money"> 
        <div>
            <img src="./images/accounting 1.png" className="money_img" alt="accounting" />
            <span>Credits</span>

        </div>
            <span className="hick"> <img src="./images/Rectangle 13.png" /> </span>
 
        </div>
        <div className="col-3 save-money">
          <div>
            <img src="./images/credit-card 1.png" className="money_img" alt="accounting" />
            <span>Plastic cards</span>
          </div>
            <span className="hick"> <img src="./images/Rectangle 13.png" /></span>
        </div>
        <div className="col-3 save-money">
          <div>
            <img src="./images/transfer 1.png" alt="accounting" />
            <span>Money transfer</span>
          </div>

        </div>
      </div>

    </div>
      <div className="our-services containere">
        <div className="service-text">
          <h3>Our services</h3>
          <p>Получите необходимую информацию, в зависимости от вашей ситуации</p>
        </div>
        <div className="row services">
          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <div className="service_img1">
                  <img src="./images/Group 7.png" />
                </div>
                <div className="service-content">
                  <h3>
                    Bizzi bankomatlar <br/>
                    bor pul almashtirishga
                  </h3>
                  <p>
                    Karoche bizda bankomatlar bor <br /> shu yerga bossangiz hammasi <br /> korinadi
                  </p>

                </div>
              </div>

              <div className="col-8">
                <div className="row">
                  <div className="col-12 online">
                    <img src="./images/plastic-application.png" />
                    <div className="service_content2">
                      <h3>
                        Online application for <br />
                        opening plastic cards
                      </h3>
                      <p>
                        Plastik kartalarimiz chotkiy yana qo`shimchasiga online <br />
                        zakaz berib olsa ham bo`ladi
                      </p>

                    </div>
                  </div>
                  <div className="col-6">
                    <div className="service_img">
                      <img src="./images/Mask Group.png" />
                    </div>
                    <span className="servi_text">
                      <h3>Online application for deposits</h3>
                    </span>
                  </div>
                  <div className="col-6 pr-0 pl-4">
                    <div className="service_img">
                      <img src="./images/SMS banking.png" />
                    </div>
                    <span className="servi_text">
                      <h3>SMS banking</h3>
                      <p>Karoche bizda SMS banking bor va zor ishlaydi</p>
                    </span>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>


      </div>
    



  

  </>



  



   
  )
}