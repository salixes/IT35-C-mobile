import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle } from "@ionic/react";


const Search: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Search</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Search</h1>
        </IonContent>
    </IonPage>
  )
};

export default Search;