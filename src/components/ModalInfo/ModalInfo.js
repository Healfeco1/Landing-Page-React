import React from 'react';
import {Modal,Button} from 'react-bootstrap';
// import  from 'react-bootstrap/Button';
import Hr from '../Hr/Hr'
import './ModalInfo.css'

function ModalInfo (props){
    if(props==undefined) {
        return null;
    }
    return (
        <>
            <Modal  {...props} >
             <Modal.Header closeButton></Modal.Header>
                <div className="col-lg-8 mx-auto mt-2">
                    <Modal.Title className="text-uppercase text-center"> <h2 className="text-secondary">{(props.description.img==undefined?'':props.description.img).split('.')[0]}</h2></Modal.Title>
                    <Hr className="white"/>
                    <img className="img-fluid" src={props.description.img==undefined?'':require(`../../assets/img/portfolio/${props.description.img}`).default} />
                    <Modal.Body className="description text-center">{props.description.description}</Modal.Body>
                    {/* <Modal.Footer> */}
                    {/* </Modal.Footer> */}
                </div>
                <Button onClick={props.onHide} className="btn btn-close mx-auto mb-3">
                    <i className="fas fa-times"> Close Project</i>
                </Button>
            </Modal>
        </>
    )
}
export default ModalInfo;