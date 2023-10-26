import styles from "./modal-overlay.module.css";
const ModalOverlay = ({ toggleModal }) => {
  return (
    <div
      onClick={() => toggleModal()}
      className={styles["modal-overlay"]}
    ></div>
  );
};
export default ModalOverlay;
