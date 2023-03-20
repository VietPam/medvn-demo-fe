import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useState } from "react";
import "./Add.css";
import { cloudUpload } from "ionicons/icons";
import api from "../api/Posts";
import { IonAlert } from "@ionic/react";
import { error } from "console";
const Add: React.FC = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [salary, setSalary] = useState<number>();

  const [Alert] = useIonAlert();

  const UploadButton = async () => {
    const employee = {
      FullName: name,
      DateOfBirth: birthday,
    };

    await api
      .post("/employees", employee)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>
            <h3>Create new user</h3>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="stacked">NAME</IonLabel>
          <IonInput
            placeholder="Enter Name"
            onIonChange={(e: any) => setName(e.detail.value)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">BIRTHDAY</IonLabel>
          <IonInput
            placeholder="Enter BirthDay"
            onIonChange={(e: any) => setBirthDay(e.detail.value)}
          ></IonInput>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonItem id="button">
          <IonButton size="large" slot="end" onClick={UploadButton}>
            <IonIcon slot="start" icon={cloudUpload}></IonIcon>Confirm
          </IonButton>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

export default Add;
