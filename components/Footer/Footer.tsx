"use client";

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram, FaMapSigns } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={`${styles.column} ${styles.logoColumn}`}>
          <Link href="/" aria-label="Главная страница">
            <Image
              src="/icons/main_logo.svg"
              alt="Логотип"
              width={140}
              height={60}
              className={styles.logo}
            />
          </Link>
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
              <FaFacebook size={24} aria-hidden="true" />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <FaInstagram size={24} aria-hidden="true" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <MdOutlineEmail size={24} aria-hidden="true" />
              <a href="mailto:info@example.com" aria-label="Email">
                info@example.com
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <p>
            <FaMapSigns size={24} aria-hidden="true" />
            ул. Тыныстанова, БЦ “Бизнес Центр”, 3-й этаж, офис 5
          </p>
          <p>
            <FiPhone size={24} aria-hidden="true" />
            +996 700 000 000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
