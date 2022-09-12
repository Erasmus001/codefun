import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Exports/exports";
import styles from "./About.module.css";
import OurStoryImg from "../../assets/png&jpg/62b9f161bada60f69e99ee69_image-1-steps-v2-starup-template-p-500.png";
import ChevronLeft from "../../assets/icons/chevron-left";
import ChevronRight from "../../assets/icons/chevron-right";
import CertHart from "../../assets/svg/cert-hat-academy.svg";

const About = () => {
  const handleLeftChevron = () => alert("Left Chevron clicked...");
  const handleRightChevron = () => alert("Right Chevron clicked...");
  return (
    <>
      <Header />
      <div className={styles.about}>
        <div className={styles.about_hd}>
          <h2>
            The mission behind <span>Codefun.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nulla
            tempore dolores libero eum cum delectus at debitis veritatis
            tenetur.
          </p>
          <Link to="our-story">Our Story</Link>
        </div>

        {/* Count */}
        <div className={styles.counter}>
          <div className={styles.count}>
            <h3>
              100<span>+</span>
            </h3>
            <h4>Students</h4>
          </div>
          <div className={styles.count}>
            <h3>
              5<span>+</span>
            </h3>
            <h4>Courses</h4>
          </div>
          <div className={styles.count}>
            <h3>
              50<span>+</span>
            </h3>
            <h4>Reviews</h4>
          </div>
          <div className={styles.count}>
            <h3>
              10<span>+</span>
            </h3>
            <h4>Teachers</h4>
          </div>
        </div>

        {/* Our Story */}
        <div className={styles.our_story}>
          <div className={styles.our_story_txt}>
            <h3>Our Story</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              blandit vitae egestas seam
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa
              nam suscipit et necessitatibus quis, animi maxime perspiciatis in
              earum voluptatum quas itaque ut! Itaque ex amet eius nobis
              quibusdam sit labore! Repellat tenetur omnis, facilis id illo
              labore doloremque molestias fuga magnam esse placeat delectus.
            </p>
            {/* <br /> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa
              nam suscipit et necessitatibus quis, animi maxime perspiciatis in
              earum voluptatum quas itaque ut! Itaque ex amet eius nobis
              quibusdam sit labore! Repellat tenetur omnis, facilis id illo
              labore doloremque molestias fuga magnam esse placeat delectus.
              Dignissimos aspernatur pariatur fuga quisquam exercitationem.
              Soluta impedit consectetur fugit.
            </p>
          </div>
          <div className={styles.our_story_img}>
            <img src={OurStoryImg} alt="" />
          </div>
        </div>

        {/* Mission Behind */}
        <div className={styles.mission}>
          <div className={styles.mission_hd}>
            <h3>The mission behind Codefun</h3>
          </div>

          {/* mission carousel */}
          <div className={styles.mission_carousel}>
            <button
              type="button"
              className={styles.left_arrow}
              onClick={handleLeftChevron}
              title="Left chevron button"
            >
              <ChevronLeft
                fill="#3434FF"
                className={styles.chevron_left}
                height="25"
                width="20"
              />
            </button>
            <div className={styles.carousel_wrapper}>
              <div className={styles.carousel_hd}>
                <img src={CertHart} alt="" />
              </div>
              <div className={styles.carousel_title}>
                <h3>1. Making Education Accessible</h3>
              </div>
              <div className={styles.carousel_txt}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis obcaecati eos rerum veniam impedit voluptatum!
                </p>
              </div>
            </div>
            <button
              type="button"
              className={styles.right_arrow}
              onClick={handleRightChevron}
              title="Right chevron button"
            >
              <ChevronRight
                fill="#3434FF"
                className={styles.chevron_right}
                height="25"
                width="20"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
