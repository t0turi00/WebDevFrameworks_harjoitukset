import React from 'react';
import styles from './Header.module.css';


export default function Header() {
    return (
        <div className={styles.headerBackground}>
            <div className={styles.header}>
                <div className={styles.brand}>HELSINGIN SANOMAT</div>
                <div className={styles.brandTwo}>Etusivu</div>
                <div className={styles.brandThree}>Uutiset</div>
                <div className={styles.brandFour}>Lehdet</div>
                <div className={styles.brandFive}>Asiakaspalvelu</div>
                <div className={styles.headerBackgroundTwo}>
                    <div>
                        Tilaa
                    </div>
                </div>
                <div className={styles.headerBackgroundThree}>
                    Kirjaudu
                </div>
                <div className={styles.headerBackgroundFour}>
                    Valikko <img src="https://icon-library.com/images/three-bar-menu-icon/three-bar-menu-icon-3.jpg"
                    height="25px"
                    width="35px"
                    ></img>
                </div>
                
            </div>

        </div>
    );
}
