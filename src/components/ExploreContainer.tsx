import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
     <>
      <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>
    </>
  );
};

export default ExploreContainer;
