import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin =() =>{
    navigation.push('/app', 'forward', 'replace')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hali Langga</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonButton expand='full'onClick={()=> doLogin()}>
        Login
      </IonButton>
         
        
      
      </IonContent>
    </IonPage>
  );
};

export default Login;
function useAcionRouter() {
  throw new Error('Function not implemented.');
}
