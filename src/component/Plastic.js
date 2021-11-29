import "./plastic.css"
export default function Plastic () {
  return (
    <div className="row container-fluid plastic m-0 p-0">
      <div className="col-lg-6 col-md-6 col-12 plastic_content">
        <h3>Plastic cards</h3>
        <p>Bizzi plastik kartalani Chet eldan kelib sorashyapti bermayapmiz <br/>
          faqat sizga beramiz deb asrab turibmiz oxirgisi qoldi lekin hozi <br />
          olmasangiz tugab qoladi, lekin qaytib kelsangiz bu narxga <br />
          bermaymiz aytib qoyay, ayniqsa dizaynini yirtib qo`yishgan <br />
           ishonmasangiz hamma kartalani ko`ringda ozingiz baho berasiz.</p>
        <button>Все карты</button>

      </div>
      <div className="col-lg-6 col-md-6 col-12 plastic-all" >
        <div className="plastic_image">
          <img className="img-fluid" src="./images/plastic-card 1.png" alt="universal" id="uni" />
          <img className="img-fluid" src="./images/humo 1.png" alt="universal"  id="humo"/>
          <img className="img-fluid" src="./images/unired 1.png" alt="universal" id="unired" />
          
        </div>
       
      </div>

    </div>
  )
}