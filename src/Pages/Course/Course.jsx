/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Header } from "../../Exports/exports";
import styles from "./Course.module.css";
// import CourseData from "../../api.json";

import Img from "../../assets/png&jpg/60b830fb89b3f8c7a3b97925_course-single-image-academy-webflow-template.jpg";

// SVG's
import Beginner from "../../assets/miniSvg/beginner-level-svg.svg";
import Duration from "../../assets/miniSvg/duration-svg.svg";
import Vid from "../../assets/miniSvg/video-svg.svg";
import LifetimeAccess from "../../assets/miniSvg/lifetime-access-svg.svg";
import AccessAnywhere from "../../assets/miniSvg/access-anywhere-svg.svg";
import Downloadable from "../../assets/miniSvg/downloadable-svg.svg";
import OnlineVid from '../../assets/miniSvg/online-vid-svg.svg'
import OneOnOne from '../../assets/miniSvg/one-on-one-mentor-svg.svg'
import CommunityChat from '../../assets/miniSvg/active-community-svg.svg'
import MultiDownlaoad from '../../assets/miniSvg/multi-download-svg.svg'

const Course = () => {
  const [hasEnrolled, setHasEnrolled] = useState(false);

  const enrollCourseHandler = () => {
    if (!hasEnrolled) {
      setHasEnrolled(true);
    } else {
      setHasEnrolled(false);
    }
  };
  return (
    <>
      <Header />
      <div className={styles.course}>
        <div className={styles.course_banner}>
          <div className={styles.course_hd}>
            <div className={styles.course_title}>
              <h3>Brand & Identity Design for Marketers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat
                feugiat congue viverra facilisis.
              </p>
            </div>
            <div className={styles.perks}>
              <div className={styles.perk}>
                <div className={styles.perk_img}>
                  <img src={OnlineVid} alt="" loading="lazy" />
                </div>
                <p>Online Videos</p>
              </div>
              <div className={styles.perk}>
                <div className={styles.perk_img}>
                  <img src={CommunityChat} alt="" loading="lazy" />
                </div>
                <p>Active Community</p>
              </div>
              <div className={styles.perk}>
                <div className={styles.perk_img}>
                  <img src={MultiDownlaoad} alt="" loading="lazy" />
                </div>
                <p>Multiple Resources</p>
              </div>
              <div className={styles.perk}>
                <div className={styles.perk_img}>
                  <img src={OneOnOne} alt="" loading="lazy" />
                </div>
                <p>One-on-One Mentorship</p>
              </div>
            </div>
            <div className={styles.tutor_profile}>
              <div className={styles.tutor}>
                <div className={styles.tutor_img}>
                  <img src={Img} alt="tutor_image" />
                </div>
                <div className={styles.tutor_info}>
                  <h4>Erasmus Mensah</h4>
                  <p>Frontend Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card */}
          <div className={styles.course_preview_card}>
            <div className={styles.preview}>
              <div className={styles.course_preview}>
                <div className={styles.course_preview_video}>
                  {/* <video src={Img} loop muted></video> */}
                  <img src={Img} alt="course_img_preview" loading="lazy" />
                </div>
                <div className={styles.course_details}>
                  <div className={styles.course_price}>
                    <h4>Free</h4>
                  </div>
                  <div className={styles.course_action}>
                    <button
                      type="button"
                      onClick={enrollCourseHandler}
                      disabled={hasEnrolled ? true : false}
                    >
                      {hasEnrolled ? "Leave Course" : "Enroll Course"}
                    </button>
                  </div>
                  <div className={styles.preview_info}>
                    <div className={styles.preview_detail}>
                      <img src={Beginner} alt={Beginner} loading="lazy" />
                      <p>Level: Beginner</p>
                    </div>
                    <div className={styles.preview_detail}>
                      <img src={Duration} alt="" loading="lazy" />
                      <p>Duration: 5hr 42mins</p>
                    </div>
                    <div className={styles.preview_detail}>
                      <img src={Vid} alt="" loading="lazy" />
                      <p>Videos: 67</p>
                    </div>
                    <div className={styles.preview_detail}>
                      <img src={Downloadable} alt="" loading="lazy" />
                      <p>Downloadable Files: 8</p>
                    </div>
                    <div className={styles.preview_detail}>
                      <img src={LifetimeAccess} alt="" loading="lazy" />
                      <p>Lifetime Access</p>
                    </div>
                    <div className={styles.preview_detail}>
                      <img src={AccessAnywhere} alt="" loading="lazy" />
                      <p>Access from any Computer, Tablet or Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Course */}
        <div className={styles.about_course}>
          <div className={styles.about_course_hd}>
            <h2>About the Course</h2>
          </div>

          <div className={styles.about_course_txt}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              amet habitasse orci convallis sodales augue.
            </p>
            <br />
            <br />
            <p>
              Ac, pellentesque proin tincidunt lobortis sit velit velit dui
              eget. Massa, lectus orci auctor morbi. A nisl vitae, sagittis
              elementum placerat nullam id integer leo. Diam venenatis amet diam
              odio ultrices auctor.
            </p>
          </div>

          {/* Course Pic Preview */}
          <div className={styles.about_course_preview}>
            <img src={Img} alt="" loading="lazy" />
          </div>

          {/* Lists */}
          <div className={styles.about_course_lists}>
            <div className={styles.about_course_title}>
              <h3>What are you going to learn?</h3>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid.
              </li>
            </ul>
          </div>
          <div className={styles.about_course_txt}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
              massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum
              scelerisque egestas. Volutpat, adipiscing a elit platea amet et.
              At at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
              habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut
              morbi risus. Ornare aliquam phasellus consequat amet velit risus.
              Amet, diam cras morbi hendrerit vitae pretium in enim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
