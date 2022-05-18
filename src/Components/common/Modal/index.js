import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import closeIcon from './../../../Assets/Icons/closeIcon.svg';

import './styles.scss';


const Modal = (props) => {
    const { onClose } = props;

    console.log( 'Modal', props);

    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
      },
    [onClose]);
    
    useEffect(() => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return () => {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    }, [closeOnEscapeKeyDown]);

    const onModalCloseHandler = () => {
      console.log('on close clicked');
      onClose();
    }

    return ReactDOM.createPortal(
        <section className="modal" onClick={onModalCloseHandler}>
          <div className="modal--content" onClick={e => e.stopPropagation()}>
            <div className="modal--header">
                <h2 className="modal--title">{props.title}</h2>
                <img src={closeIcon} className="modal--exit-icon" alt="close" onClick={onModalCloseHandler}/>
            </div>
            <div className="modal--body">
              {props.children}
            </div>
          </div>
        </section>,
        document.getElementById("root")
    )
}


export default Modal;