import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onRemoveCart} className={classes["backdrop"]}></div>;
};

const ModalOverlay = (props) => {
    return <div className={classes['modalOverlay']}>
        {props.children}
    </div>
}

const portalElement = document.getElementById("modal");

const Modal = (props) => {
    return <Fragment>
        {createPortal(<Backdrop onRemoveCart={props.onRemoveCart}/>,portalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
}
export default Modal;