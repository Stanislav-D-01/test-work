import styles from "./contact-modal.module.css";
import locationIcon from "../../images/location-mark.svg";
import cloclIcon from "../../images/three-o-clock-clock 1.svg";
import vkIcon from "../../images/vk.svg";
import instIcon from "../../images/inst.svg";
import dzenIcon from "../../images/icons8-yandex-zen-144 1.svg";

const ContactModal = () => {
  return (
    <div className={styles["contact-modal"]}>
      <h2 className={styles["contact-modal__title"]}>Контактная информация</h2>
      <a
        className={`${styles["contact-modal__grey-text"]} ${styles["contact-modal__container"]}`}
      >
        <img
          className={styles["contact-modal__icon"]}
          src={locationIcon}
          alt={"иконка локации"}
        />
        Наш офис
      </a>
      <p className={styles["contact-modal__black-text"]}>
        Санкт-Петербург, ул. Такая-то, д. 1
      </p>
      <u
        className={`${styles["contact-modal__black-text"]} ${styles["contact-modal__link"]}`}
      >
        Показать на карте
      </u>
      <div className={styles["contact-modal__call-block"]}>
        <section>
          <p className={styles["contact-modal__blue-text"]}>
            <span className={styles["contact-modal__grey-text"]}>Звоните:</span>{" "}
            +7 (495) 123-45-67
          </p>
          <p className={styles["contact-modal__blue-text"]}>
            <span className={styles["contact-modal__grey-text"]}>Пишите:</span>{" "}
            info@test.ru
          </p>
        </section>
        <button className={styles["contact-modal__button"]}>
          Заказать звонок
        </button>
      </div>
      <p
        className={`${styles["contact-modal__grey-text"]} ${styles["contact-modal__container"]}`}
        s
      >
        <img
          src={cloclIcon}
          alt={"иконка часов"}
          className={styles["contact-modal__icon"]}
        />
        Режим работы:
      </p>
      <p className={styles["contact-modal__black-text"]}>
        Пн-Пт — с 10:00 до 18:00 <br />
        Сб-Вс — выходной
      </p>
      <p
        className={`${styles["contact-modal__grey-text"]} ${styles["contact-modal__text-social"]}`}
      >
        Мы в соцсетях
      </p>
      <div className={styles["contact-modal__social-icons"]}>
        <img className={styles["contact-modal__social-icon"]} src={vkIcon} />
        <img className={styles["contact-modal__social-icon"]} src={instIcon} />
        <img className={styles["contact-modal__social-icon"]} src={dzenIcon} />
      </div>
    </div>
  );
};
export default ContactModal;
