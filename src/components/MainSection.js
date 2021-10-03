import React from 'react';
import styles from './MainSection.module.css';

export default function MainSection(props){
    return(
        <div className={styles.mainSectionBackground}>
            KoronaVirus
           <div>
               <div>
           <img src="https://images.cdn.yle.fi/image/upload/c_fill,g_faces/q_auto:eco,f_auto,fl_lossy/13-3-11707771" 
            height="450px" width="725px">
           </img>   
           <div className={styles.HS}><span class={styles.TriangleColor}>•</span> HS seuraa</div>

             <div className={styles.Header}>
                  <span class={styles.HeaderTwo}> Päivittyvä Seuranta | </span> 
                  <span class={styles.HeaderThree}> STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan </span>
                  
                 </div> 
              <div className={styles.HeaderFour}>Koronaviruksen vaikutukset Suomessa</div>

              <table>  
                        <thead>
                        
                            <th>
                                <div className={styles.tableHeader}>Tartunnat Yhteensä </div>
                            </th>
                            <th>
                                <div className={styles.tableHeader}>Tuoreimmat 14 päivää</div>

                            </th>
                            <th>
                                <div className={styles.tableHeader}>Edeltävät 14 päivää</div>

                            </th>
                            
                        </thead>
                        </table>
                        
                        
                        <table>
                        <tbody>

                                <tr>
                                    <td></td>
                                    <td><div className={styles.HF}>7776</div></td>
                                    <td><div className={styles.HSX}><span  class={styles.TriangleColor}>▲</span>293</div></td>
                                    <td><div className={styles.HSTH}>132</div></td>
                                   
                                </tr>

                                <tr>
                                    <td></td>
                                    <td><div className={styles.tableHeaderTwo}>Kuolleet</div></td>
                                    
                                </tr>

                                <tr>
                                    <td></td>
                                    <td><div className={styles.HF}>334</div></td>
                                    <td><div className={styles.HSXTwo}><span class={styles.TriangleColor}> ▲ </span>5 </div></td>
                                    <td><div className={styles.HSTHTwo}>1</div></td>
                                   
                                </tr>
                                </tbody>
                        </table>

           </div>
           </div>
        </div>
    );
}