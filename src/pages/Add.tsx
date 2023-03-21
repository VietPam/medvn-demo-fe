import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useState, useRef } from "react";
import "./Add.css";
import { cloudUpload } from "ionicons/icons";
import api from "../api/Posts";
import { IonAlert } from "@ionic/react";
import { error, log } from "console";
import { format, utcToZonedTime } from "date-fns-tz";
import {  parseISO } from 'date-fns';

const Add: React.FC = () => {
  const [name, setName] = useState("");
  const today = new Date();
  today.setFullYear(today.getFullYear()-18)
  const [birthday, setBirthDay] = useState(today.toJSON());
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
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const confirm = () => {
    datetime.current?.confirm();
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
        <IonList inset={true}>
          <IonItem>
            <IonLabel position="stacked">NAME</IonLabel>
            <IonInput
              placeholder="Enter Name"
              onIonChange={(e: any) => setName(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonAccordionGroup>
            <IonAccordion value="start">
              <IonItem lines="inset" slot="header">
                <IonLabel>Ngày sinh</IonLabel>
                <IonDatetimeButton
                  slot="end"
                  datetime="start-date"
                ></IonDatetimeButton>
              </IonItem>
              
              <IonDatetime
                id="start-date"
                slot="content"
                presentation="date"
                value={birthday}
                max={today.toJSON()}
                onIonChange={(e:any) => {
                  console.log(today.toJSON())
                  
                  setBirthDay(e.detail.value)
                }}
              ></IonDatetime>
            </IonAccordion>   
          </IonAccordionGroup>

          
        </IonList>
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
