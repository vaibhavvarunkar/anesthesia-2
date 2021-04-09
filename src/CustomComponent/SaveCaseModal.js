import React from 'react'
import Modal from 'react-modal'
import '../css/savecasemodal.css'
const SaveCaseModal = (props) => {
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
            height:400
        }
      };

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    return (
        <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.onClose}
          style={customStyles}
          contentLabel="Example Modal"
         >
        <div className="savecasemodal-container" >
            <div className="close-without-saving-case-container" >
            CLOSE WITHOUT SAVING CASES
            </div>
            <div onClick={()=>props.onClickSave()} className="close-without-saving-case-container" >
            SAVE

            </div>
            
        </div>
        </Modal>
        </div>
    )
}

export default SaveCaseModal
