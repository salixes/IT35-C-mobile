import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { logoGoogle } from 'ionicons/icons';
import { supabase } from '../lib/supabaseClient';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin =() =>{
    navigation.push('/app', 'forward', 'replace')
  }
const signinwithgoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location}app`
    }
  })
}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hi Langga</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonButton expand='full'onClick={signinwithgoogle}>
        <IonIcon icon={logoGoogle}/>
        Continue with Google
      </IonButton>
         
        
      
      </IonContent>
    </IonPage>
  );
};

export default Login;
