

import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import ApiUrl from '../../Api/ApiUrl';
import axios from 'axios';
import CollectionLoding from '../PlaceholderLoding/CollectionLoding';
import { Link } from 'react-router-dom';

class Collection extends Component {
     constructor(){
          super();
          this.state ={
            allproduct : [],
            loaderDiv:"",
            mainDiv:"d-none"
          }
        }
        componentDidMount(){
          axios.get(ApiUrl.AllProductremark("COLLECTION")).then(response => {
          
            this.setState({allproduct : response.data, loaderDiv:"d-none",
            mainDiv:""});
      
            
            })
            .catch(function (error) {
            
            })
        }
     render() {
          const CollectionProduct = this.state.allproduct;
          const Productlist = CollectionProduct.map((CollectinList,i)=>{
               if(CollectinList.special_price == 'null'){
                    return(
                         <Col key={i.toString} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                         <Link to={`/product-details/${CollectinList.id}`}>
                         <Card className="image-box card w-100">
                         <img className="center w-75" src={CollectinList.image} />   
                         <Card.Body> 
                         <p className="product-name-on-card">{CollectinList.tittle}</p>
                         <p className="product-price-on-card">Price : ${CollectinList.price}</p>
               
                         </Card.Body>
                         </Card>   
                         </Link>       
                         </Col>
                    )
               }else{
                    return(
                         <Col key={i.toString} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                         <Link className="text-link" to={`/product-details/${CollectinList.id}`}>
                         <Card className="image-box card w-100">
                         <img className="center w-75" src={CollectinList.image} />   
                         <Card.Body> 
                         <p className="product-name-on-card">{CollectinList.tittle}</p>
                         <p className="product-price-on-card">Price : <strike className="text-secondary">${CollectinList.price}</strike> ${CollectinList.special_price}</p>
               
                         </Card.Body>
                         </Card>   
                         </Link>       
                         </Col>
                    )
               }
               
          })
          return (
              <Fragment>
               <CollectionLoding data ={this.state.loaderDiv}/>
               <div className={this.state.mainDiv}>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

     <Row>
         

{Productlist}
        


     </Row>
                   </Container>
                   </div>
              </Fragment>
          )
     }
}

export default Collection