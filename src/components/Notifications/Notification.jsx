import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap'
import axios from 'axios';
import ApiUrl from '../../Api/ApiUrl';

 class Notification extends Component {
    constructor(){
        super();
        this.state={
             show:false,
             notification : [],
             Notificationtitle : '',
             Notificationdescript : '',
             Notificationdate : ''
        }
   }
   componentDidMount(){
    axios.get(ApiUrl.Notificaton).then(response => {
    
        this.setState({notification : response.data});
        //console.log(response.data)
        
        })
        .catch(function (error) {
        
        })
   }

    handleClose = () =>{
        this.setState({ show:false})
    };  

    handleShow = (e) => {
         this.setState({ show:true })
         let Notidate = e.target.getAttribute('data-date');
         let Notititle = e.target.getAttribute('data-title');
         let Notimessage = e.target.getAttribute('date-descript');
         this.setState({
          Notificationtitle : Notititle ,
             Notificationdescript : Notimessage,
             Notificationdate : Notidate
         })
    }; 

  render() {
    const allNotification = this.state.notification
    const NotificationAll = allNotification.map((Notif, i)=>{

        
            if(Notif.status == 1){
                return(
                <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
            <Card  className="notification-card">
                <Card.Body>
                    <h6> {Notif.tittle}</h6>
                    <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {Notif.date} | Status: Unread</p>
                    <Button onClick={this.handleShow} data-title ={Notif.tittle} data-date = {Notif.date}  
                       date-descript ={Notif.description}  className="btn btn-danger">Details </Button> 
                </Card.Body>
            </Card>
            </Col>
            )
            }else{
                return(
                    <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                <Card  className="notification-card">
                    <Card.Body>
                        <h6> {Notif.tittle}</h6>
                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {Notif.date} | Status: read</p>
                        <Button onClick={this.handleShow} data-title ={Notif.tittle} data-date = {Notif.date}  
                       date-descript ={Notif.description}  className="btn btn-danger">Details </Button>
                    </Card.Body>
                </Card>
                </Col>
                )
            }
            
        
    })
    return (
      <Fragment>
         <Container className="TopSection">
    <Row>
        
        {NotificationAll}
       
    </Row>
</Container>


<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
           <h6><i className="fa fa-bell"></i> {this.state.Notificationdate}</h6>
        </Modal.Header>
        <Modal.Body>
             <h6>{this.state.Notificationtitle}</h6>
             <p>
             {this.state.Notificationdescript}
             </p>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      </Fragment>
    )
  }
}

export default Notification