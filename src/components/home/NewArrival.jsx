
import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ApiUrl from '../../Api/ApiUrl';
import axios from 'axios';
import NewArrivalLoding from '../PlaceholderLoding/NewArrivalLoding';
import { Link } from 'react-router-dom';

class NewArrival extends Component {
  constructor(props){
    super(props);
    this.state = {
      ProductList : [],
      loaderDiv:"",
      mainDiv:"d-none"
    }
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this)
}
next(){
    this.slider.slickNext();
}
previous(){
    this.slider.slickPrev();
}
componentDidMount(){
  axios.get(ApiUrl.AllProductremark("NEW")).then(response => {
    
    this.setState({ProductList : response.data, loaderDiv:"d-none",
    mainDiv:""});

    
    })
    .catch(function (error) {
    
    })
}
     render() {
      const Product_All = this.state.ProductList;
      const New_Product = Product_All.map((NewList,i)=>{
        if(NewList.special_price == 'null'){
        return(
          <div key={i.toString()}>
            <Link className="text-link" to={`/product-details/${NewList.id}`}>
          <Card className="image-box card">
          <img className="center" src={NewList.image} />   
          <Card.Body> 
          <p className="product-name-on-card">{NewList.tittle}</p>
          <p className="product-price-on-card">Price : ${NewList.price}</p>

          </Card.Body>
          </Card>
          </Link>
          </div>
        )
      }else{
        return(
          <div key={i.toString()}>
            <Link to={`/product-details/${NewList.id}`}>
          <Card className="image-box card">
          <img className="center" src={NewList.image} />   
          <Card.Body> 
          <p className="product-name-on-card">{NewList.tittle}</p>
          <p className="product-price-on-card">Price : <strike className="text-secondary">${NewList.price}</strike> ${NewList.special_price}</p>

          </Card.Body>
          </Card>
          </Link>
          </div>
        )
      }
      })

          var settings = {
               dots: false,
               infinite: false,
               speed: 500,
               autoplay: true,
               autoplaySpeed:3000,
               slidesToShow: 4,
               slidesToScroll: 1,
               initialSlide: 0,
               arrows: false,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 2,
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


          return ( 
               <Fragment>
                <NewArrivalLoding data ={this.state.loaderDiv}/>
                <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>NEW ARRIVAL &nbsp;
          <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
            &nbsp;
            <a className="btn btn-sm ml-2 site-btn" onClick={this.next} ><i className="fa fa-angle-right"></i></a>

          </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

               <Row>

               <Slider ref={c=>(this.slider=c)} {...settings}>
          
          
          {New_Product}
          
          
        </Slider>

               </Row>


                    </Container>
                    </div>

               </Fragment>
          )
     }
}

export default NewArrival