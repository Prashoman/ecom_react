import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApiUrl from '../../Api/ApiUrl';
import axios from 'axios';
import FetureProductLoding from '../PlaceholderLoding/FetureProductLoding';

 class FeaturesProducts extends Component {
  constructor(){
    super();
    this.state ={
      allproduct : [],
      loaderDiv:"",
      mainDiv:"d-none"
    }
  }
  componentDidMount(){
    axios.get(ApiUrl.AllProductremark("FEATURED")).then(response => {
    
      this.setState({allproduct : response.data, loaderDiv:"d-none",
      mainDiv:""});

      
      })
      .catch(function (error) {
      
      })
  }
  render() {
    const FetureProduct = this.state.allproduct;
    const Products = FetureProduct.map((product,i)=>{
      if(product.special_price == 'null'){
        return(
              <Col className="p-1" key={i.toString()}  xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link className="text-link" to={`/product-details/${product.id}`}>
                  <Card className="image-box card">
                        <img className="center" src={product.image} />   
                    <Card.Body> 
                        <p className="product-name-on-card">{product.tittle}</p>
                        <p className="product-price-on-card">Price : ${product.price}</p>

                </Card.Body>
              </Card>
              </Link>
          </Col>
        
        
       )
      }else{
        return(
          <Col className="p-1" key={i.toString()}  xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link to={`/product-details/${product.id}`}>
              <Card className="image-box card">
                    <img className="center" src={product.image} />   
                <Card.Body> 
                    <p className="product-name-on-card">{product.tittle}</p>
                    <p className="product-price-on-card">Price : <strike className="text-secondary">${product.price}</strike> ${product.special_price}</p>

            </Card.Body>
          </Card>
          </Link>
       </Col>
    
    
        )
      }
      
    })
    return (
      <Fragment>
        <FetureProductLoding data = {this.state.loaderDiv} lodingProduct={this.state.allproduct}/>

        <div className={this.state.mainDiv}>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>


            <Row>
               
                {Products}
               
               

            </Row>


        </Container>
        </div>
      </Fragment>
    )
  }
}

export default FeaturesProducts