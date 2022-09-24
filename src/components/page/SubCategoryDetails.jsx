import React, { Component, Fragment } from 'react'

import NevMenudesktop from '../common/NevMenuDesktop'
import withRouter from '../hoc/WithRouter'

import NevMenumobile from '../common/NevMenuMobile'

import FooterDesktop from '../common/FooterDesktop'
import Footermobile from '../common/FooterMobile'
import ApiUrl from '../../Api/ApiUrl'
import axios from 'axios'
import SubCategoryProduct from '../ProductDetails/SubCategoryProduct'



export class SubCategoryDetails extends Component {
    constructor(props){
        super()
        // console.log(props.params.category)
        // console.log(props.params.subcategory)

        this.state = {
            Category : props.params.category,
            Subcategory : props.params.subcategory,
            ProductData : []
        }

    }
    componentDidMount(){
        axios.get(ApiUrl.AllProductSubcategory(this.state.Category, this.state.Subcategory)).then(response => {
           
          this.setState({ProductData :response.data });
            //console.log(this.state.ProductData)
          
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
                
              <SubCategoryProduct CategoryName ={this.state.Category} SubCategoryName={this.state.Subcategory} ProductDetails ={this.state.ProductData}/>
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

export default withRouter(SubCategoryDetails) 