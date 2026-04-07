import {  IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import { homeOutline, information, logOutOutline, settingsOutline } from 'ionicons/icons';
import Page1 from './page1';
import Page2 from './page2';



const Menu: React.FC = () => {

  const path = [
    {name:'Home', url:'/app/home',icon:homeOutline},
    {name:'Page1', url:'/app/page1',icon:information},
    {name:'Page2', url:'/app/page2',icon:settingsOutline}
  ]

  return (
    <IonPage>
     <IonSplitPane contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          
          {path.map((item,index) => (
            <IonMenuToggle key={index}>
              <IonItem routerLink={item.url} routerDirection="forward">
                <IonIcon icon={item.icon} slot="start"></IonIcon>
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}

          <IonButton routerLink="/" routerDirection="back" expand="full">
           <IonIcon icon={logOutOutline} slot="start"></IonIcon>
          Logout
          </IonButton>

        </IonContent>

      </IonMenu>

      <IonRouterOutlet id="main">
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