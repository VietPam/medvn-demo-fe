import React, { useState } from 'react';
import { IonAlert, IonButton, useIonViewWillEnter } from '@ionic/react';
import Delete from './Delete';
import { useParams } from 'react-router';
import api from "../api/Posts";

function DeleteAlert() {
    const params: any = useParams();
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
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
              header="Alert!"
              buttons={[
                  {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                      },
                  },
                  {
                      text: 'OK',
                      role: 'confirm',
                      handler: () => {
                      },
                  },
              ]}
              onDidDismiss={({ detail }) => { } } isOpen={false}      ></IonAlert>
    </>
  );
}
export default DeleteAlert;