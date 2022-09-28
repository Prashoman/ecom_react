
import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import ApiUrl from '../../Api/ApiUrl';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryLoding from '../PlaceholderLoding/CategoryLoding';

class Categorys extends Component {
     constructor(){
          super();
          this.state = {
            ManuData:[],
            loaderDiv:"",
            mainDiv:"d-none"
          }
     }
        componentDidMount(){
          axios.get(ApiUrl.CategoryDetails).then(response => {
                    this.setState({ManuData :response.data, loaderDiv:"d-none",
                    mainDiv:"" });
               }).catch(function (error) {
                    
               })
          }
        
     render() {
          const catedetails = this.state.ManuData;
          const catelist = catedetails.map((catlist,i)=>{
               
               return(
                    <Col key={i.toString()} className="p-0" xl={2} lg={3} md={3} sm={4} xs={4}>
                       <Link className="text-link" to={`/productcategory/${catlist.category_name}`}>  
                         <Card className="h-100 w-100 text-center">          
                         <Card.Body> 
                         <img className="center" src={catlist.category_image} />  
                         <h5 className="category-name">{catlist.category_name}</h5>  
                         </Card.Body>
                         </Card> 
                    </Link>
                    </Col>
               )
          })
          return (
               <Fragment>
                    <CategoryLoding data = {this.state.loaderDiv}/>
                    <div className={this.state.mainDiv}>
                  <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>


              {catelist}
          </Row>




         


                    </Container>
                    </div>
               </Fragment>
          )
     }
}

export default Categorys