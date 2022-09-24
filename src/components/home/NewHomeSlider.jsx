import React, { Component } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../asset/images/slider1.jpg'
import Slider2 from '../../asset/images/slider2.jpg'
import Slider3 from '../../asset/images/slider3.jpg'

 class NewHomeSlider extends Component {
  render() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const data = this.props.Data
      
      const SliderList = data.map((datalist,i)=>{
      //  console.log(datalist)
       return(
        <div key={i.toString()}>
        <img className="slider-img" src={datalist.image} />
 </div>
       )
      })
      
      


   return (
      <div>


<Slider {...settings}>
   
   
{SliderList}
 </Slider>





      </div>
   )
  }
}

export default NewHomeSlider