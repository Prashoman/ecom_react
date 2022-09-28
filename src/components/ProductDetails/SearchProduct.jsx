import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

 class SearchProduct extends Component {
    render() {
        const SearchKey = this.props.search_data;
        
        const ProductList = this.props.product_data
        console.log(ProductList)
        const ProductData = ProductList.map((DetailsProduct, i)=>{
            
                return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Link className="text-link" to={`/product-details/${DetailsProduct.id}`}>
                <Card className="image-box card w-100">
                <img className="center w-75" src={DetailsProduct.image} />   
                <Card.Body> 
                <p className="product-name-on-card">{DetailsProduct.tittle}</p>
                <p className="product-price-on-card">Price : ${DetailsProduct.price}</p>
    
                
                </Card.Body>
                </Card> 
                </Link>         
                </Col>
    
          
    
        })
    
        return (
          <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> Your Searching Product </h2>
    
          </div>
    
                <Row> 
                        {ProductData}
                </Row>
        </Container>
          </Fragment>
        )
      }
}

export default SearchProduct