/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Mentorship.module.css";
import Header from "../../Components/Header/Header";
import Star from "../../assets/svg/SVG/Star";
import ArrowStartup from "../../assets/svg/SVG/ArrowStartup";

import Img1 from "../../assets/png&jpg/pricing-starup-template1.png";
import Img2 from "../../assets/png&jpg/pricing-starup-template2.png";
import { Link } from "react-router-dom";
import CheckIcon from "../../assets/svg/check.svg";
import CheckIcon2 from "../../assets/svg/check2.svg";

const plans = [
  {
    id: 1,
    img: Img1,
    title: "Beginner",
    price: "Ghc 150",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    isSelected: false,
    route: "/beginner",
    lists: [
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app..."
    ],
  },
  {
    id: 2,
    img: Img2,
    title: "Intermediate",
    price: "Ghc 250",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    isSelected: true,
    route: "/intermediate",
    lists: [
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
    ],
  },
  {
    id: 3,
    img: Img1,
    title: "Advanced",
    price: "Ghc 350",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    isSelected: false,
    route: "/advanced",
    lists: [
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
      "This is a test runner app...",
    ],
  },
];

const Mentorship = () => {
  const [mentorshipData, setMentorshipData] = useState(plans);

  return (
    <>
      <Header />
      <div className={styles.mentorship}>
        {/* Banner Section */}
        <div className={styles.pricing_banner}>
          <div className={styles.text}>
            <h2>Our Mentorship Program</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore consectur draging
            </p>
          </div>
          <div className={styles.star}>
            <Star />
          </div>

          {/*  */}
          <div className={styles.mentorship_selector}>
            <div className={styles.buttons}>
              <button>Monthly</button>
              <button>Annually</button>
            </div>
            <span className={styles.discount}>
              <div className={styles.arrow}>
                <p>Save 20% paying annually</p>
                <div className={styles.star_arrow}>
                  <ArrowStartup />
                </div>
              </div>
            </span>
          </div>
        </div>

        {/* Mentorship Plans */}
        <div className={styles.mentorship_cards}>
          <div className={styles.mentorship_card__hd}>
            <h3>Mentorship Plan</h3>
          </div>

          {/* Rendering all Mentorship Plans */}
          <div className={styles.card_lists}>
            {mentorshipData?.map((plan, index) => (
              <MentorshipCard key={index} data={plan} />
            ))}
          </div>
        </div>

        {/* Comparisons */}
        {/* <div className={styles.comparisons}>
          <div className={styles.comparison_text}>
            <h2>Feature Comparison</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore consectur draging
            </p>
          </div>
          <div className={styles.comparison_table}>
            <div className={styles.comparison_table__hd}>
              <div className={styles.hd}>
                <h2>Features</h2>
              </div>
              <div>
                <h2>Beginner</h2>
              </div>
              <div>
                <h2>Intermediate</h2>
              </div>
              <div>
                <h2>Advanced</h2>
              </div>
            </div>
            <div className={styles.comparison_lists}>
              <div className={styles.comparison_row}>
                <div className={styles.hd}>
                  <h2>Code Reviews</h2>
                </div>
                <div className={styles.starter}>
                  <h2 className={styles.invisible}>Beginner</h2>
                </div>
                <div className={styles.intermediate}>
                  <img src={CheckIcon2} alt="" />
                </div>
                <div className={styles.advanced}>
                  <img src={CheckIcon2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

// Mentorship Plan Card..

const MentorshipCard = ({ data }) => {
  return (
    <div
      className={`${styles.mentorship_card} ${
        data.isSelected ? styles.selected : ""
      }`}
    >
      <div className={styles.card_img}>
        <img src={data.img} alt={data.title} loading="lazy" />
      </div>
      <div className={styles.card_title}>
        <h3>{data.title}</h3>
      </div>
      <div className={styles.card_price}>
        <p>{data.price} <small>/ Mon</small></p>
      </div>
      <div className={styles.card_txt}>
        <p>{data.txt}</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.card_list}>
        {data.lists?.map((list, index) => (
          <ul key={index}>
            <li>{list}</li>
          </ul>
        ))}
      </div>
      <div className={styles.card_link}>
        <Link to={data.route}>Get Started</Link>
      </div>
    </div>
  );
};

export default Mentorship;
