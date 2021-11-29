import {Link} from "react-router-dom"
export default function Header () {
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-dark container-fluid">
        <div className="navbar-brand">
          <Link to="/">
          
          <img src="./images/logo-ubank 1.png" alt="rasm1" />
          </Link>
        </div>
			<button class="navbar-toggler ml-auto bg-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class=" mr-0 collapse navbar-collapse p-3" id="navbarTogglerDemo01">
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
              <Link to="/cabinet">
              <img src="./images/cabinet.png"  alt="rasm" />
              </Link>
              <img src="./images/cil_hamburger-menu.png" alt="rasm"  />


            </div>
			</div>
		</nav>
    
    <header className="container-fluid">
      <div className="kredit row">
        <div className="col-8">

        <ul>
            <li><Link>Кредиты</Link></li>
            <li><Link> Пластиковые карты  </Link></li>
            <li><Link>Вклады</Link></li>
            <li><Link>Оплата и платежы</Link></li>
            <li><Link>Денежные переводыa</Link></li>
        </ul>

        </div>
        <div className="col-4">
        <button>Интернет банкинг</button>
        </div>

      </div>


    </header>
    </>
  )
}