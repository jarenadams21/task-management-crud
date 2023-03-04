// Using JSX
import React, {useRef} from 'react'

function Modal({children, showModal, setShowModal}) {

    const modalRef = useRef(null)

    const closeModal = (e) => {
        if(e.target === modalRef.current) {
            setShowModal(false);
        }
    }

    return ( showModal &&
    <div className="Modal" ref={modalRef} onClick={closeModal}>
        <div className="container">
            {children}
        </div>
    </div>)
}

export default Modal