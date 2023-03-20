import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { v4 } from "uuid";
import {
  checkmarkCircle,
  checkmarkCircleOutline,
  createOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import api from "../api/Posts";

const Datails: React.FC = () => {
  const params: any = useParams();
  const [editMode, setEditMode] = useState(false)
  const [data, setData] = useState<any>([{}]);
  useIonViewWillEnter(async () => {
    const id = params.Id
    await api.get(`/employees/${id}`)
        .then(async res => {
            await setData(res.data)
        })
        .catch(error => {

        })
})
   
  
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonBackButton defaultHref="/view"></IonBackButton>
              <IonTitle>Thông tin chi tiết</IonTitle>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      
        <IonList>
          <IonItem>
            <IonLabel>Name: {data.FullName}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Birthday: {data.DateOfBirth}</IonLabel>
          </IonItem>
        </IonList>

        <IonGrid fixed={true}>
          <IonRow className="ion-justify-content-around">
            <IonCol size="4">
              <IonButton color="success" disabled={!editMode}>
                <IonIcon slot="start" icon={checkmarkCircleOutline}></IonIcon>
                Xac Nhan
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton onClick={() => setEditMode(!editMode)}>
                <IonIcon slot="start" icon={createOutline}></IonIcon>
                Edit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Datails;
