import React from 'react';
import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import Page1 from './page1';
import Page2 from './page2';
import './Home.css';

const Menu: React.FC = () => {

const path = [
  {name: "Home", url: '/app/home', icon: homeOutline}
]

  return (
    <IonPage>
   <IonSplitPane contentId= "main">
   <IonMenu contentId= "main">
    
    {/* Header */}
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
        </IonToolbar>
        </IonHeader>
<IonContent>
{/*Slidemenu Items */}
    {path.map((item,index) => (
      <IonMenuToggle key={index}>
      <IonItem routerLink={item.url} routerDirection="forward">
        <IonIcon icon={item.icon} slot="start"></IonIcon>
       {item.name}
      </IonItem>
      </IonMenuToggle>
    ))}
</IonContent>
           </IonMenu>
           {/*router */}
   <IonRouterOutlet id= "main">
       <Route exact path="/app/home" component={Home} />
       <Route exact path="/app">
            <Redirect to="/app/home" />
       </Route>
        <Route exact path="/app/page1" component={Page1} />
         <Route exact path="/app/page2" component={Page2} />
        
   </IonRouterOutlet>
   </IonSplitPane>
    </IonPage>
  );
};

export default Menu;