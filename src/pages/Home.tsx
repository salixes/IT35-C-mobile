import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import { bookmarkOutline, search, star } from 'ionicons/icons';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';
import Favorites from './home-tabs/Favorites';

const Home: React.FC = () => {
  const tabs = [
    { name:"feed", tab: 'feed', url: "/app/home/feed", icon: bookmarkOutline},
    { name:"search", tab: 'search', url: "/app/home/search", icon:search },
    { name:"favorites", tab: 'favorites', url: '/app/home/favorites', icon:star },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
            <IonTitle>Tabs</IonTitle>
          </IonToolbar>
          {tabs.map((item, index) => (
          <IonTabButton key={index} tab={item.tab} href={item.url}>
            <IonIcon icon={item.icon} />
            <IonLabel>{item.name}</IonLabel>
          </IonTabButton>
        ))} 
          
         </IonTabBar>
         <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home" />
          <Redirect to="/app/home/feed" />
          <Route exact path="/app/home/search" component={Search} />
          <Route exact path="/app/home/favorites" component={Favorites} />
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>

  );
};

export default Home;