import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react"
 
const Templates: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons >
                        <IonMenuButton></IonMenuButton>
                        <IonTitle></IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Feed</h1>
            </IonContent>
            </IonPage>
    );
};

export default Templates;