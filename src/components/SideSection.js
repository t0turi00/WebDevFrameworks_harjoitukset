import React from 'react';
import styles from './SideSection.module.css';

export default function SideSection(){
    return(
        <div className={styles.textStyling}>
            <div className={styles.sideBG}>
                <div className={styles.sideTextStyle}>Luetuimmat </div>
            </div>
            <div className={styles.sideBG}>
                <div className={styles.Header}>
                    <ol class={styles.orderedList}>
                    <div className={styles.sideTextStyleTwo}>
                  <li> 
                  <span class={styles.HeaderOne}> Rikosepäilyt | </span> 
                  <span class={styles.HeaderTwo}> EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa</span> 
                  </li>
                  </div>

                  <div className={styles.sideTextStyleTwo}>
                  <li>
                  <span class={styles.HeaderOne}> HS Vantaa | </span> 
                  <span class={styles.HeaderTwo}> Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</span> 
                  </li>
                  </div>

                  <div className={styles.sideTextStyleTwo}>
                  <li>
                  <span class={styles.HeaderOne}> Päivittyvä seuranta | </span> 
                  <span class={styles.HeaderTwo}>STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</span> 
                  </li>
                  </div>

                  <div className={styles.sideTextStyleTwo}>
                  <li>
                  <span class={styles.HeaderOne}> Nyt.fi | </span> 
                  <span class={styles.HeaderTwo}>Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "Mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</span> 
                  </li>
                  </div>

                  <div className={styles.sideTextStyleTwo}>
                  <li>
                  <span class={styles.HeaderOne}> Rikosepäilyt | </span> 
                  <span class={styles.HeaderTwo}>Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</span> 
                  </li>
                  </div>
                  
                  <div className={styles.sideTextStyleTwo}>
                  
                  <li>
                  <span class={styles.HeaderOne}> Helsinki | </span> 
                  <span class={styles.HeaderTwo}>Työryhmän ehdotus julki: jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asiakkaille</span> 
                  </li>
                  </div>

                  </ol>
                  </div>
                  </div>
                  
        </div>
    );
}