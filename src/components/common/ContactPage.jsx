import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button, } from 'react-bootstrap'
import Validation from '../../Validition/Validation';
import axios from 'axios';
import ApiUrl from '../../Api/ApiUrl';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


 class ContactPage extends Component {
     constructor(){
          super();

          this.state = {
               'name' : '',
               'email' : '',
               'massege' : ''
          }
     }

     onChangeName = (e) =>{
          let name = e.target.value;
          // alert(name)
          this.setState({name : name});
     }
     onChangeEmail = (e) =>{
          let email = e.target.value;
          // alert(email)
          this.setState({email : email});
     }
     onChangeMassage = (e) =>{
          let massege = e.target.value;
          // alert(massege)
          this.setState({massege : massege});
     }
     ContactFrom = (e) =>{

          let name = this.state.name;
          let email = this.state.email;
          let massege = this.state.massege;
          let sendBtn = document.getElementById('sendBtn');
          let contactFrom = document.getElementById('contactfrom');
          if((name.length == 0) && (email.length == 0) && (massege.length == 0)){
               toast.error('Name field Requerid');
               toast.error('Email filed Requerid');
               toast.error('Massege filed Requerid');
          }
          else if(!(Validation.NameRegx).test(name)){
               toast.error('invalid name');
          }
          else if(name.length == 0){
               toast.error('name is rqureid');
          }
          else if(email.length == 0){
               toast.error('email is rqureid');
          }
          else if(massege.length == 0){
               toast.error('massege is rqureid');
          }
          else{
               sendBtn.innerHTML = "sending.....";
               let MyFromData = new FormData();
               MyFromData.append("name",name);
               MyFromData.append("email", email);
               MyFromData.append("massege", massege);



               axios.post(ApiUrl.ContactUs,MyFromData)
                  .then(function (response) {
                    if(response.status==200 && response.data==1){
                         toast.success("Message Send Successfully");
                         sendBtn.innerHTML = "send";
                         contactFrom.reset();
                         
                    }
                    else{
                         toast.error("Insert Not Successfully"); 
                    sendBtn.innerHTML = "send";
                    }
                  })
                  .catch(function (error) {
                    toast.error("Insert Not Successfully");
                    sendBtn.innerHTML = "send";
                  });
          }
         
          
          e.preventDefault();
     }
  render() {
    return (
        <Fragment>
        <Container>
               <Row className="p-2">
       <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

               <Row className="text-center">
               <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                    <Form id="contactfrom" onSubmit={this.ContactFrom} className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US </h4>
                    <h6 className="section-sub-title">Please Contact With Us </h6>
                    <input className="form-control m-2" onChange={this.onChangeName} type="text" placeholder="Enter Your name" />

                    <input className="form-control m-2" onChange={this.onChangeEmail} type="email" placeholder="Enter Email" />

                    <Form.Control as="textarea" onChange={this.onChangeMassage} lassName="form-control m-2" placeholder="Leave a comment here" style={{ height: '100px' }}
                         />
                    <Button id='sendBtn' type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>

                </Form>
            </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                 <br></br><br></br>
           <p className="section-title-contact">
           1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
Email: Support@easylearningbd.com
           </p>

           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                         </Col>
               </Row>






                    </Col>
               </Row>
          </Container>
          <ToastContainer
           />
      </Fragment>
    )
  }
}

export default ContactPage

