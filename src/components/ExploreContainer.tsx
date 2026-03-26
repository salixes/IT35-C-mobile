import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <>
      <IonButton>Default</IonButton>
      <IonButton disabled={true}>Disabled</IonButton>
    </>
    </div>
  );
};

export default ExploreContainer;
