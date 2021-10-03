import React from 'react';
import './App.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';
import SideSection from './components/SideSection';
import Advertisement from './components/Advertisement';
import NewsNotificationTwo from './components/NewsNotificationTwo';
function App() {
  return (
    
    <div>
    <Header />
    <NewsNotification topic='PÄIVÄN TIMANTTI' body='Tutkija kertoo: Näin sota näkyy meissä edelleen'/>
    <NewsNotificationTwo topicTwo='PÄIVÄN TIMANTTI' bodyTwo='Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'/>
    <Advertisement topic='Mainos' body='Faktoille on nyt suurempi tarve koskaan - tutustu Hesariin 2 viikkoa maksutta!'/>

    
    <MainSection />
    <SideSection/>
    </div>   
  );
}

export default App;
