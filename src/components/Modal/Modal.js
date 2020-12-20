import s from './Modal.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }
  render() {
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
