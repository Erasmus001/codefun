/* eslint-disable no-unused-vars */
import React from 'react'
import Sidenav from '../../Components/Sidenav/Sidenav'
import { Header } from '../../Exports/exports'
import styles from './UserDashboard.module.css'

import UserProfile from '../../assets/icons/user'
import EditIcon from '../../assets/icons/pencil-alt'

const UserDashboard = () => {
  return (
    <>
      <Header />

      {/* Dashboard */}
      <div className={styles.user_dashboard}>
        <Sidenav />
        <div className={styles.dashboard}>
          <div className={styles.dashboard_bg}></div>
          <div className={styles.dashboard_content}>
            {/* User Profile */}
            <div className={styles.user_profile}>
              <div className={styles.user_img_container}>
                <UserProfile fill='black' height='60' width='60' strokeWidth='4' />
              </div>
            </div>

            {/* User Details */}
            <div className={styles.user_details}>
              <div className={styles.user_details_wrapper}>
                <div className={styles.user_info}>
                  <h4>Account name:</h4>
                  <p>Erasmus Mensah</p>
                  <button className={styles.edit_btn}>
                    <EditIcon fill='black' height='10' width='10' strokeWidth='4' />
                  </button>
                </div>
                <div className={styles.user_info}>
                  <h4>Email:</h4>
                  <p>Erasmus Mensah</p>
                  <button className={styles.edit_btn}>
                    <EditIcon fill='black' height='10' width='10' strokeWidth='4' />
                  </button>
                </div>
                <div className={styles.user_info}>
                  <h4>Contact Number:</h4>
                  <p>Erasmus Mensah</p>
                  <button className={styles.edit_btn}>
                    <EditIcon fill='black' height='10' width='10' strokeWidth='4' />
                  </button>
                </div>
                <div className={styles.user_info}>
                  <h4>Joined Date:</h4>
                  <p>Erasmus Mensah</p>
                  <button className={styles.edit_btn}>
                    <EditIcon fill='black' height='10' width='10' strokeWidth='4' />
                  </button>
                </div>
                <div className={styles.user_info}>
                  <h4>Country of Origin:</h4>
                  <p>Erasmus Mensah</p>
                  <button className={styles.edit_btn}>
                    <EditIcon fill='black' height='10' width='10' strokeWidth='4' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard