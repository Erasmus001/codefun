import React from "react";
import { Header } from "../../../Exports/exports";
import styles from "./SingleMentorship.module.css";
import Pic from "../../../assets/png&jpg/pricing-starup-template1.png";
import Checkmark from "../../../assets/icons/checkmark-circle";

const Beginner = () => {
  return (
    <div>
      <Header />

      <div className={styles.mentorship_form}>
        <div className={styles.mentorship_container}>
          <div className={styles.mentorship_hd}>
            <div className={styles.mentorship_hd_top}>
              <img src={Pic} alt="" loading="lazy" />
              <h2>Beginner plan</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                dignissimos nostrum tempora quo ipsam reiciendis iste non.
                Temporibus ipsa veniam earum commodi neque facilis saepe
                molestiae, accusantium quia, quam illum reprehenderit itaque
                animi modi maiores?
              </p>
            </div>
            <div className={styles.lists}>
              <ul>
                <li>
                  <span>
                    <Checkmark
                      fill="black"
                      height="25"
                      width="25"
                      strokeWidth="2"
                    />
                    Lorem ipsum dolor sit amet.
                  </span>
                </li>
                <li>
                  <span>
                    <Checkmark
                      fill="black"
                      height="25"
                      width="25"
                      strokeWidth="2"
                    />
                    Lorem ipsum dolor sit amet.
                  </span>
                </li>
                <li>
                  <span>
                    <Checkmark
                      fill="black"
                      height="25"
                      width="25"
                      strokeWidth="2"
                    />
                    Lorem ipsum dolor sit amet.
                  </span>
                </li>
                <li>
                  <span>
                    <Checkmark
                      fill="black"
                      height="25"
                      width="25"
                      strokeWidth="2"
                    />
                    Lorem ipsum dolor sit amet.
                  </span>
                </li>
                <li>
                  <span>
                    <Checkmark
                      fill="black"
                      height="25"
                      width="25"
                      strokeWidth="2"
                    />
                    Lorem ipsum dolor sit amet.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.mentorship_form}>
            <form>
              <h1>Form</h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beginner;
