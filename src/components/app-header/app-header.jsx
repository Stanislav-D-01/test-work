import logo from "../../images/logo.svg";
import styles from "./app-header.module.css";
import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import ContactModal from "../contact-modal/contact-modal";

export const AppHeader = ({ clickButton }) => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", keydownEsc);

    return () => {
      document.removeEventListener("keydown", keydownEsc);
    };
  }, []);
  const toggleModal = () => {
    setModal(!modal);
  };
  const keydownEsc = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };
  const modalContact = () => {
    return (
      <Modal toggleModal={() => toggleModal()}>
        <ContactModal />
      </Modal>
    );
  };
  return (
    <header className={styles.header}>
      <ul className={styles.header__ul}>
        <img className={styles.header__image} src={logo} alt={"Логотип"} />
        <li className={styles.header__li}>Преимущества</li>
        <li className={styles.header__li}>Услуги</li>
        <li className={styles.header__li}>Виджет</li>
        <li className={styles.header__li}>Кому</li>
        <li className={styles.header__li}>Тарифы</li>
        <li className={styles.header__li}>Блог</li>
      </ul>
      <section className={styles.header__right}>
        <div className={styles["header__lng-button"]}>En</div>
        <p className={styles.header__contact}>+7 (495) 123-45-67</p>
        <button onClick={() => toggleModal()} className={styles.header__button}>
          Контакты
        </button>
      </section>
      {modal && modalContact()}
    </header>
  );
};
