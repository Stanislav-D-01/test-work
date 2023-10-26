import { AppHeader } from "../app-header/app-header";
import styles from "../app/app.module.css";
import Background from "../background/background";
import HomePage from "../../pages/home/home-page";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useState } from "react";
import Modal from "../modal/modal";

export function App() {
  return (
    <>
      <Background />
      <AppHeader />
      <HomePage />
    </>
  );
}
