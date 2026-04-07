import { IonContent, IonHeader, IonItem, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonIcon, IonMenuToggle } from '@ionic/react';
import Home from './Home';
import { Redirect, Route } from 'react-router';
import { homeOutline, informationOutline, settingsOutline } from 'ionicons/icons'
import Page1 from './Page1';
import Page2 from './Page2';

const Menu: React.FC =()=>{

  const path = [
    {name:'Home', url:"/app/home",icon:homeOutline},
    {name:'Page1', url:"/app/page1",icon:settingsOutline},
    {name:'Page2', url:"/app/page2",icon:informationOutline}
  ]

  return(
    <IonPage>
        <IonSplitPane contentId="main">
           <IonMenu contentId="main">


              <IonHeader>
                <IonToolbar>
                  <IonTitle>Menu</IonTitle>
                </IonToolbar>
              </IonHeader>

              <IonContent>

                {path.map((item, index) => (
                  <IonMenuToggle key={index}>
                    <IonItem routerLink={item.url} routerDirection="forward">
                      <IonIcon icon={item.icon} slot="start"></IonIcon>
                      {item.name}
                    </IonItem>
                  </IonMenuToggle>
                ))}

              </IonContent>

           </IonMenu>

           <IonRouterOutlet id="main">
             <Route exact path="/app/home" component={Home}/>
             <Route exact path="/app">
                <Redirect to="/app/home"/>
             </Route>

             <Route exact path="/app/Page1" component={Page1}/>
             <Route exact path="/app/Page2" component={Page2}/>
           </IonRouterOutlet>

        </IonSplitPane>
    </IonPage>    
  );
};
export default Menu;