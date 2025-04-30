"use client";

import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaMapSigns } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={`${styles.column} ${styles.logoColumn}`}>
          <h2 className={styles.logo}>LOGO</h2>
        </div>

        <div className={styles.column}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/about">О компании</Link>
            </li>
            <li>
              <Link href="/tours">Туры</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
            <li>
              <Link href="/guides">Гиды</Link>
            </li>
            <li>
              <Link href="/reviews">Отзывы</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul className={styles.socialList}>
            <li>
              <FaFacebook size={30} /> 
              <a href="https://facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <FaInstagram size={30} /> 
              <a href="https://instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <MdOutlineEmail size={30} /> 
              <a href="mailto:info@example.com">Email</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <p>
            <FaMapSigns size={50} /> ул. Тыныстанова БЦ “Бизнес Центр” 3-й этаж,
            офис 5
          </p>
          <p>
            <FiPhone size={30} /> + 996 700 000 000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
