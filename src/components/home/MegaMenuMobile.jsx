import React, { Component } from 'react'
import ApiUrl from '../../Api/ApiUrl';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class MegaMenuMobile extends Component {
    constructor(){
        super();
        this.state ={
            Megamenu : []
        }
        
   }
   componentDidMount(){
      axios.get(ApiUrl.CategoryDetails).then(response => {
    
      this.setState({Megamenu :response.data });

      
      })
      .catch(function (error) {
      
      })
   }

   MenuItemClick=(event)=>{
      event.target.classList.toggle("active");
      var panel = event.target.nextElementSibling;
      if(panel.style.maxHeight){
           panel.style.maxHeight = null;
      }else{
           panel.style.maxHeight= panel.scrollHeight+ "px"
      }

 }



   
   


  render() {

      const Megalist = this.state.Megamenu;
      const CateList = Megalist.map((catelist,i)=>{
            return (
<div key={i.toString}>
      <button onClick={this.MenuItemClick} className="accordionMobile">
                  <img className="accordionMenuIconMobile" src={catelist.category_image} />&nbsp; {catelist.category_name}
      </button>
      <div className="panelMobile">
            <ul>{
                  
                  (catelist.subcategory.map((subcat, i)=>{
                                  
                        return(
                             <li><Link to={`/productSubcategory/${catelist.category_name}/${subcat.subcategory_name}`} className="accordionItem" > {subcat.subcategory_name}</Link></li>
                        )
                   }))
                  }
                  
            
                 
            </ul>
      </div>
</div>
            )
      })

    return (
        <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">


            

{CateList}




        </div>

   </div>
    )
  }
}

export default MegaMenuMobile