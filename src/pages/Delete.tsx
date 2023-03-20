import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonActionSheet, useIonAlert } from '@ionic/react';
import { useState } from 'react';
import './Add.css';
import {cloudUpload} from 'ionicons/icons'
import api from '../api/Posts'
const Delete: React.FC = () => {
    const[id,setId]=useState('')
    const[resul,setResul]=useState([])
    const [presentAlert]=useIonAlert()
    const DeleteButton=async ()=>     
    {
      await api.delete(`/${id}`)
      .then( async res=>{
        console.log(res.data)
        presentAlert("delete success")
     })
     .catch(error=>{
         presentAlert(error)
     })
    }

  return (
    <IonPage>
      
      <IonContent fullscreen>
        <IonItem>
            <IonLabel>Id</IonLabel>
                <IonInput onIonChange={(e:any)=>setId(e.detail.value)}></IonInput>
        </IonItem>
        <IonItem>
            
                <IonButton onClick={DeleteButton}><IonIcon icon={cloudUpload}></IonIcon>Confirm</IonButton>
            
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Delete;