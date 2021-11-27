import "./plastic.css"
export default function Plastic () {
  return (
    <div className="row containere plastic">
      <div className="col-6 plastic_content">
        <h3>Plastic cards</h3>
        <p>Bizzi plastik kartalani Chet eldan kelib sorashyapti bermayapmiz <br/>
          faqat sizga beramiz deb asrab turibmiz oxirgisi qoldi lekin hozi <br />
          olmasangiz tugab qoladi, lekin qaytib kelsangiz bu narxga <br />
          bermaymiz aytib qoyay, ayniqsa dizaynini yirtib qo`yishgan <br />
           ishonmasangiz hamma kartalani ko`ringda ozingiz baho berasiz.</p>
        <button>Все карты</button>

      </div>
      <div className="col-6 plactic_image">
        <img src="./images/plastic-card 1.png"alt="plastic" className="uni" />
        <img src="./images/humo 1.png"alt="plastic" className="humo" />
        <img src="./images/unired 1.png" alt="plastic" className="unired" />


      </div>

    </div>
  )
}