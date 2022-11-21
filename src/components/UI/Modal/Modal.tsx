import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop: React.FC<{ onClose: () => void }> = props => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlays: React.FC<{ children: JSX.Element }> = props => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
};

const portalEl = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<{ onClose: () => void, children: any }> = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
      {ReactDOM.createPortal(<ModalOverlays>{ props.children }</ModalOverlays>, portalEl)}
    </>
  );
};

export default Modal;