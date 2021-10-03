import React from 'react';
import styles from './Advertisement.module.css';


export default function Advertisement(props){
    return(
     <div className={ styles.container }>
         <span className={ styles.header }>{ props.topic }:</span> { props.body }
     
     </div>
    );

}

