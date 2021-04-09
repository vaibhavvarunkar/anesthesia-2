import React,{useContext} from 'react';
import Modal from 'react-modal';
import '../css/BurgerMenu.css';
import {Link} from 'react-router-dom'
import UserContext from '../UserContext'
const BurgerMenuModal = (props) => {
    const {signOut}=useContext(UserContext)

    var subtitle;
    const customStyles = {
        content : {
          top                   : '10%',
          left                  : '40%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          backgroundColor:"white",
          width:400,
          height:500,
        }
        
      };

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

      const logout=()=>{
        var token= sessionStorage.getItem("token")
   
        fetch(`http://ec2-18-189-0-11.us-east-2.compute.amazonaws.com/api/user-logout?device_type=Android&device_token=123` ,{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
     
    })
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="Logout successfully"){
              window.location="/login"
                  
             signOut()
            }

        })
    }

    

    return (
        <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.onClose}
          style={customStyles}
          // portalClassName="modal"
          // overlayClassName="Overlay"
          contentLabel="Example Modal"
         >
         <div className="wrapper-menu">
         <div className="burger-modal-container" >
            <Link to="/afterLogin" className="link" >HOME</Link>
            {/* <div className="border" ></div> */}
            <Link to="/myprofile" className="link" >MY PROFILE</Link>
            {/* <div className="border" ></div> */}
           
            <Link to="/savecases" className="link" >OPEN A CASE</Link>
            <div style={{marginLeft:20}} >The User's Cases</div>
            <div style={{marginLeft:20}} >Shared Cases</div>
            <div style={{marginLeft:20}} >Case Templates</div>
            {/* <div classNameName="border" ></div> */}
           
            <div >OPEN A CASE SUMMARY</div>
            {/* <div className="border" ></div> */}
           
            <Link to="/settings" className="link" >SETTINGS</Link>
            {/* <div className="border" ></div> */}
           
            <Link to="/mysubcription" className="link" >MY SUBSCRIPTION</Link>
            {/* <div className="border" ></div> */}
           
            <Link to="/notification" className="link"  >NOTIFICATION</Link>
            {/* <div className="border" ></div> */}
           
            <Link to="/feedback" className="link" >FEEDBACK</Link>
            {/* <div className="border" ></div> */}
           
            <div className="link" onClick={()=>logout()} >LOGOUT</div>
        </div>
         </div>
       
        </Modal>
        </div>
    )
}


export default BurgerMenuModal;

