import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./View.css";
import { v4 } from "uuid";

import api from "../api/Posts";
import React from "react";
import { useParams } from "react-router";
const View: React.FC = () => {
  const [data, setData] = useState<any>([{}]);
  const params: any = useParams();

  useIonViewWillEnter(async () => {});
  const getData = async () => {
    await api
      .get("/employees")
      .then(async (res) => {
        await setData([...res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DeleteButton = async (idDel:any) => {
    const id = params.Id;
    await api
      .delete(`/employees/${idDel}`)
      .then(async (res) => {
        console.log(idDel);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useIonViewWillEnter(async () => {
    await getData();
  });
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonListHeader>Danh sách nhân viên</IonListHeader>

        {data.map((el: any) => {
          return (
            <IonItem key={v4()} routerLink={`/view/${el.id}`}>
              <IonLabel>{el.FullName}</IonLabel>
              <IonButton slot="end" onClick={()=>DeleteButton(el.id)}>
                Delete
              </IonButton>
            </IonItem>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
export default View;
