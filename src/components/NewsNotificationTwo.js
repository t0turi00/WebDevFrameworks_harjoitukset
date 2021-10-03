import React from 'react';
import styles from './NewsNotification.module.css';

export default function NewsNotificationTwo(props){
    return(
     <div className={ styles.containerTwo }>
         <span className={ styles.headerTwo }>{ props.topicTwo }:</span> { props.bodyTwo }
         
     </div>
    );
    
}

