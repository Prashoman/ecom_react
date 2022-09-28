import React, { Component, Fragment } from 'react'
import NevMenudesktop from '../common/NevMenuDesktop'

import NevMenumobile from '../common/NevMenuMobile'

import FooterDesktop from '../common/FooterDesktop'
import Footermobile from '../common/FooterMobile'
import withRouter from '../hoc/WithRouter'
import ProductDetailsAll from '../ProductDetails/ProductDetailsAll'
import SuggestedProduct from '../ProductDetails/SuggestedProduct'
import ApiUrl from '../../Api/ApiUrl'
import axios from 'axios'
import NewHomeSlider from '../home/NewHomeSlider'

 class ProductDetails extends Component {
  constructor(props){
    super();
    // console.log(props.params.product_id)
    this.state = {
      Product_id :props.params.product_id,
      tittle :'',
      image :'',
      price :'',
      special_price : '',
      star:'',
      image1:'',
      image2 :'',
      image3 :'',
      image4 :'',
      product_id : '',
      short_description: '',
      long_description : '',
      category: '',
      subcategory : '',
      brand : '',
      productCode: '',
      color :'',
      size : ''
       
    }
  }
  componentDidMount(){
    window.scroll(0,0)
    axios.get(ApiUrl.ProductDetails(this.state.Product_id)).then(response => {
       var  data = (response.data)
       console.log()
      // console.log((response.data)['productList'][0]['image'])
      // console.log((response.data)['productList'][0]['price'])
      // console.log((response.data)['productList'][0]['special_price'])
      // console.log((response.data)['productList'][0]['star'])
      // console.log((response.data)['productDetails'][0]['image1'])
      // console.log((response.data)['productDetails'][0]['image2'])
      // console.log((response.data)['productDetails'][0]['image3'])
      // console.log((response.data)['productDetails'][0]['image4'])
      // console.log((response.data)['productDetails'][0]['product_id'])
      // console.log((response.data)['productDetails'][0]['short_description'])
      // console.log((response.data)['productDetails'][0]['long_description'])
      this.setState({
      tittle :    data['productList'][0]['tittle'],
      image :   data['productList'][0]['image'],
      price :   data['productList'][0]['price'],
      special_price : data['productList'][0]['star'],
      star:   data['productDetails'][0]['image1'],
      image1:   data['productDetails'][0]['image2'],
      image2 :    data['productDetails'][0]['image3'],
      image3 :    data['productDetails'][0]['image4'],
      image4 :    data['productDetails'][0]['image4'],
      product_id :    data['productDetails'][0]['product_id'],
      short_description:    data['productDetails'][0]['short_description'],
      long_description :    data['productDetails'][0]['long_description'],
      category :data['productList'][0]['category'],
      subcategory : data['productList'][0]['subcategory'],
      brand : data['productList'][0]['brand'],
      productCode: data['productList'][0]['product_code'],
      color : data['productDetails'][0]['color'],
      size : data['productDetails'][0]['size']
      });

      
      })
      .catch(function (error) {
      
      })
  }
  render() {
   
      return (
      
        <Fragment>
          <div className="Desktop">
                      <NevMenudesktop/>
                      
                  </div>
  
                  <div className="Mobile">
                      <NevMenumobile/>  
                      
                  </div> 
                  <ProductDetailsAll 
                  AllDetailstittle ={this.state.tittle}
                  AllDetailsimage={this.state.image}
                  AllDetailsprice ={this.state.price}
                  AllDetailsspecial_price={this.state.special_price} 
                  AllDetailsstar={this.state.star}
                  AllDetailsimage1={this.state.image1}
                  AllDetailsimage2 ={this.state.image2}
                  AllDetailsimage3 ={this.state.image3}
                  AllDetailsimage4 ={this.state.image4}
                  AllDetailsproduct_id ={this.state.product_id}
                  AllDetailsshort_description={this.state.short_description}
                  AllDetailslong_description ={this.state.long_description}
                  AllDetailscategory ={this.state.category}
                  AllDetailssubcategory ={this.state.subcategory}
                  AllDetailsbrand ={this.state.brand}
                  AllDetailsproductCode ={this.state.productCode}
                  AllDetailscolor ={this.state.color}
                  AllDetailssize ={this.state.size}
                  
                  />
                  

                  <SuggestedProduct/>
                  
                  <div className="Desktop">
                  <FooterDesktop/>
                  </div>
                  <div className="Mobile">
                      <Footermobile/>
                  </div>
  
        </Fragment>
      )
   
    
  }
}

export default withRouter(ProductDetails)