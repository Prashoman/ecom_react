import React, { Component, Fragment } from 'react'

 class MegaMenu extends Component {
     constructor(props){
          super();
          
     }

     



     MegaMenu(){
          var acc = document.getElementsByClassName("accordion");
          
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
     const CatList = this.props.data;
     const Myview = CatList.map((catlist,i)=>{
          return(
            
               <div key={i.toString()}>
                    <button onClick={this.MenuItemClick}  className="accordion">
                         <img className="accordionMenuIcon" src={catlist.category_image} />&nbsp; {catlist.category_name}
                    </button>
                    <div className="panel">
                         <ul>{
                              (catlist.subcategory.map((subcat, i)=>{
                                  
                                   return(
                                        <li><a href="#" className="accordionItem" > {subcat.subcategory_name}</a></li>
                                   )
                              }))
                              }
                              
                              
                              
                         </ul>
                    </div>
               </div>
               
          )
     })
     

          return (
               <div className="accordionMenuDiv">
               <div className="accordionMenuDivInside">

               {Myview}
               
               















               </div>

          </div>
          )
     }
  }


export default MegaMenu