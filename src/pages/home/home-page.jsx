import styles from "./home-page.module.css";
import grafOne from "../../images/img1.svg";
import grafTwo from "../../images/img2.svg";
import grafThree from "../../images/img3.svg";
import grafAvatar from "../../images/Group 2.svg";
import grafAvatarTwo from "../../images/Group 1.svg";

const HomePage = () => {
  return (
    <>
      <div className={styles["home-page"]}>
        <h1 className={styles["home-page__title"]}>
          Техническая поддержка сайтов, CRM систем и мобильных приложений
        </h1>
        <p className={styles["home-page__text"]}>
          Профессиональное техническое сопровождение и обслуживание сайтов:
          полный комплекс услуг от опытных экспертов
        </p>
        <button className={styles["home-page__button-connect"]}>
          Подключиться
        </button>
        <button className={styles["home-page__button-next"]}></button>
      </div>
      <img
        className={styles["home-page__graf-one"]}
        src={grafOne}
        alt={"картинка график"}
      />
      <img
        className={styles["home-page__graf-two"]}
        src={grafTwo}
        alt={"картинка график"}
      />
      <img
        className={styles["home-page__graf-three"]}
        src={grafThree}
        alt={"картинка график"}
      />
      <img
        className={styles["home-page__graf-avatar"]}
        src={grafAvatar}
        alt={"картинка аватрка"}
      />
      <img
        className={styles["home-page__graf-avatar-two"]}
        src={grafAvatarTwo}
        alt={"картинка аватрка"}
      />
      <div className={styles["home-page__circle-one"]}></div>
      <div className={styles["home-page__circle-two"]}></div>
      <div className={styles["home-page__circle-three"]}></div>
    </>
  );
};
export default HomePage;
