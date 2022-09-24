import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
 class Category extends Component {
  render() {
    const ProductList = this.props.ProductList;
    const Category = this.props.CategoryName;
    console.log(Category)
    const CatList = ProductList.map((catlist, i)=>{
     console.log(catlist)
     if(catlist.special_price == 'null'){
      return(
           <Col key={i.toString} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
           <Card className="image-box card w-100">
           <img className="center w-75" src={catlist.image} />   
           <Card.Body> 
           <p className="product-name-on-card">{catlist.tittle}</p>
           <p className="product-price-on-card">Price : ${catlist.price}</p>
 
           </Card.Body>
           </Card>          
           </Col>
      )
 }else{
      return(
           <Col key={i.toString} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
           <Card className="image-box card w-100">
           <img className="center w-75" src={catlist.image} />   
           <Card.Body> 
           <p className="product-name-on-card">{catlist.tittle}</p>
           <p className="product-price-on-card">Price : <strike className="text-secondary">${catlist.price}</strike> ${catlist.special_price}</p>
 
           </Card.Body>
           </Card>          
           </Col>
      )
 }
    })
    
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55"><h2> {Category}</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>

        {CatList}
              
          </Row>




         


                    </Container>
      </Fragment>
      
    )
  }
}

export default Category