import React from "react";
import styles from './ShowSuccessPopup.module.scss'
const ShowSuccessPopup = () => {
    return (
        <>
            <div className={styles.messageToastContainer}>
                {true &&
                    <div className={`${styles.toastWrap} `}>
                        <p className={`${styles.toastParaText} text-xxs w-500`}>{message}</p>
                    </div>
                }
            </div>
        </>
    )
}