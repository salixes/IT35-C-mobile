import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
              <IonButtons slot="start">
                    <IonMenuButton>  </IonMenuButton>
                    </IonButtons>
          <IonTitle>Mua</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Page2;