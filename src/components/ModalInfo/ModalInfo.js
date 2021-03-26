import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalInfo (props){
    if(props==undefined) {
        return null;
    }
    console.log(props)
    return (
        <>
            <Modal  {...props} size="lg">
                <div className="col-lg-8 mx-auto">
                    <Modal.Header closeButton>
                        <Modal.Title>{(props.description.img==undefined?'':props.description.img).split('.')[0]}</Modal.Title>
                    </Modal.Header>
                        <img className="img-fluid" src={props.description.img==undefined?'':require(`../../assets/img/portfolio/${props.description.img}`).default} />
                </div>
                    <Modal.Body>{props.description.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide} className="close btn-lg mx-auto rounded-pill">
                            x Close Project
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalInfo;
// render(<ModalInfo/>);


/**
    const [show, setShow] = useState(props.show);
    return (
            <>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogclassNameName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
                </Modal>
            </>
        );
 */