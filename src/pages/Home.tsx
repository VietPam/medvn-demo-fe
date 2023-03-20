import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {addOutline} from 'ionicons/icons'
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonButton routerLink='/add'>
            <IonIcon icon={addOutline}>
              Nhap
            </IonIcon>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
