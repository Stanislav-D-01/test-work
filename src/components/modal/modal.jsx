import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom/client";
import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, toggleModal }) => {
  return createPortal(
    <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
      <ModalOverlay toggleModal={() => toggleModal()} />
      <div className={styles.children}>{children}</div>
    </div>,
    document.getElementById("root"),
  );
};
export default Modal;
