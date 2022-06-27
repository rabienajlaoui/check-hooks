import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'

function Add({getMovie}) {
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title: "",
        description:"",
        rate: 1,
        urlImg: "",
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
        }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add my movie
        </Button>
        
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
                <p>Your movie's title  : <input name='title' type='text' placeholder='The title' onChange={handleChange}></input></p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Description  : <input name='description' type='text' placeholder='Description' onChange={handleChange}></input></p>
          <p>Rate  : <input name='rate' type='number' placeholder='0 - 5' min={0} max={5} onChange={handleChange}></input></p>
          <p>Image link  : <input name='urlImg' type='text' placeholder='Urlimg' onChange={handleChange}></input></p>
          <p>Trailer link  : <input name='trailer' type='text' placeholder='Youtube link' onChange={handleChange}></input></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={()=>{getMovie(newMovie);handleClose()}}>Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default Add