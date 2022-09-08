import React, { Component, Fragment } from 'react'

 class MegaMenu extends Component {
     constructor(){
          super();
          this.MegaMenu = this.MegaMenu.bind(this);
     }

     componentDidMount(){
          this.MegaMenu();
     }



     MegaMenu(){
          var acc = document.getElementsByClassName("accordion");
          var accNum = acc.length;
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){
                    console.log(this)
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px"
                    }
               })
          }
     }
  render() {
    return (
     <div className="accordionMenuDiv">
     <div className="accordionMenuDivInside">


<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
</button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>



<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>




<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>



<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>



<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>



<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>




<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>



<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>

<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>

<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>
<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>
<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>
<button className="accordion">
   <img className="accordionMenuIcon" src="https://icon2.cleanpng.com/20180817/vjg/kisspng-computer-icons-portable-network-graphics-scalable-photo-svg-png-icon-free-download-179885-onlin-5b77490ee9a867.2670098915345441429571.jpg" />&nbsp; Men's Clothing 
          </button>
<div className="panel">
<ul>
<li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
<li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
</ul>
</div>












     </div>

</div>
    )
  }
}

export default MegaMenu