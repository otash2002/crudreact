import "./slider.css"
export default function Slider () {
  return(
    <div class="slider">
      <div class="sliders">
        <input type="radio" name="radio-btn" id="radio1"/>
          <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
              <input type="radio" name="radio-btn" id="radio4"/>



                <div class="slide first">
                  <div className="row sllider-row">
                    <div className="col-6 slide_text"> 
                    <h3>VISA Electronic</h3>
                      <p>Если Вы хотите совершать онлайн-покупки <br/> просто и безопасно, </p>
                     <button>Оформит карту</button>

                    </div>
                    <div className="col-6"> 

                     <img src="./images/opa1 1.png" alt=""/>
                    </div>

                  </div>
                </div>

                <div class="slide">
                  <img src="images/picture.jpg" alt=""/>
                </div>

                <div class="slide">
                  <img src="images/picture.jpg" alt=""/>
                </div>
                <div class="slide">
                  <img src="images/car.jpg" alt=""/>
                </div>


             

                <div class="navigation-manual">
                  <i class="fal fa-chevron-left mr-5"></i>
                  <label for="radio1" class="manual-btn"></label>
                  <label for="radio2" class="manual-btn"></label>
                  <label for="radio3" class="manual-btn"></label>
                  <label for="radio4" class="manual-btn"></label>
                  <i class="fal fa-chevron-right ml-4"></i>
                </div>





              </div>
            </div>

  )
}