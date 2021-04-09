import React from 'react'
import Modal from 'react-modal'
import '../css/savecasename.css'
const SaveCaseNameModal = (props) => {
    console.log(props.saveVisible)
    var subtitle;
    const customStyles = {
        content : {
          top                   : '35%',
          left                  : '42%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
            backgroundColor:"black",
            width:350,
            height:350
        }
      };

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    return (
        <div>
        <Modal
          isOpen={props.saveVisible}
          onRequestClose={props.onClose}
          style={customStyles}
          contentLabel="Example Modal"
         >
        <div className="savecasemodal-container" >
          <input  placeholder="APPENDECTOMY_12-19-2020_18YO_MALE" type="text" className="save-case-name-input" />  
          <div onClick={()=>props.postRequest()}  className="close-without-saving-case-container" >
           Save 
        </div>
      
        <div onClick={()=>props.closeNameModal()}  className="close-without-saving-case-container" >
           Cancel
        </div>
      
        </div>
        </Modal>
        </div>
    )
}

export default SaveCaseNameModal
