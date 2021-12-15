import React, {useState} from 'react';
import {Modal} from 'react-bootstrap'
import CloseIcon from '@material-ui/icons/Close';

function Popup(props) {

    return (
        <Modal
        {...props}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body>
          <div className="d-flex justify-content-end" >
            <CloseIcon style={{cursor:"pointer", color:"#1F1F1F", transform: "scale(1.5)"}} onClick={props.onHide} />
          </div>
          <h4 className="m-auto mb-4" style={{color:"#1F1F1F",width:"90%"}}>Notifications</h4>
            <p className="mx-4">No new notifications</p>
        </Modal.Body>
      </Modal>
    );
  }
export default Popup;