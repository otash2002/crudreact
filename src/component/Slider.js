import "./slider.css"
import { Carousel } from 'react-carousel-minimal';
export default function Slider () {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div className="row">
      <div className="col-6>
      San Francisco
      </div>
      <div className="col-6>
      San Francisco
      </div>
                
              
                </div>`
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div className="row">
      <div className="col-6>
      San Francisco
      </div>
      <div className="col-6>
      San Francisco
      </div>
                
              
                </div>`
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div className="row">
      <div className="col-6>
      San Francisco
      </div>
      <div className="col-6>
      San Francisco
      </div>
                
              
                </div>`
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div className="row">
      <div className="col-6>
      San Francisco
      </div>
      <div className="col-6>
      San Francisco
      </div>
                
              
                </div>`
    },
   
 
  ];

 
  return (
    <div className="container-fluid">
          <Carousel
            data={data}
            time={0}
            width="100%"
            height="500px"
            radius="10px"
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="red"
            pauseIconSize="40px"
        slideBackgroundColor="#031C29"
            slideImageFit="cover"
          />
    </div>
  );
}