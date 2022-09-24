import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

export default class SubCategoryProduct extends Component {
  render() {
    const Category = this.props.CategoryName;
    const SubCategory = this.props.SubCategoryName;
    const ProductList = this.props.ProductDetails

    const ProductData = ProductList.map((DetailsProduct, i)=>{
        if(DetailsProduct.special_price=='null'){
            return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
            <img className="center w-75" src={DetailsProduct.image} />   
            <Card.Body> 
            <p className="product-name-on-card">{DetailsProduct.title}</p>
            <p className="product-price-on-card">Price : ${DetailsProduct.price}</p>

            
            </Card.Body>
            </Card>          
            </Col>

       }
       else{

            return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
            <img className="center w-75" src={DetailsProduct.image} />   
            <Card.Body> 
            <p className="product-name-on-card">{DetailsProduct.title}</p>
            <p className="product-price-on-card">Price : <strike className="text-secondary">${DetailsProduct.price}</strike> ${DetailsProduct.special_price}</p>

            </Card.Body>
            </Card>          
            </Col>

       } 

    })

    return (
      <Fragment>
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55"><h2> {Category } /  {SubCategory}  </h2>

      </div>

            <Row> 
                    {ProductData}
            </Row>
    </Container>
      </Fragment>
    )
  }
}
