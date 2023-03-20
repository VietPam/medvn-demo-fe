import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Add.css';
import {cloudUpload} from 'ionicons/icons'
import api from '../api/Posts'
const Change: React.FC = () => {
    const[id,setId]=useState('')
    const[name,setName]=useState('')
    const[birthday,setBirthDay]=useState('')
    const[salary,setSalary]=useState<number>()

    

    const ChangeButton=async ()=>
        {
            interface user{
            Name?: String,
            BDAy?:String,
            Salary?:Number
        }
        const dataChange:user ={
       
          Name:name,
          BDAy:birthday,
          Salary:Number(salary)
        }
         
        if(!name)
        {
          delete dataChange['Name']
        } 
        if(!birthday)
        {
          delete dataChange['BDAy']
        } 
        if(!salary)
        {
          delete dataChange['Salary']
        }     
        console.log(dataChange);
        
        let res=await api.patch(`/${id}`,dataChange)
        console.log(res);
        
    }

  return (
    <IonPage>
      
      <IonContent fullscreen>
        <IonItem>
            <IonLabel>Id</IonLabel>
                <IonInput onIonChange={(e:any)=>setId(e.detail.value)}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Name</IonLabel>
                <IonInput onIonChange={(e:any)=>setName(e.detail.value)}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>BirthDay</IonLabel>
                <IonInput  onIonChange={(e:any)=>setBirthDay(e.detail.value)}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Salary</IonLabel>
                <IonInput onIonChange={(e:any)=>setSalary(e.detail.value)}></IonInput>
        </IonItem>
        <IonItem>
            
              <IonButton onClick={ChangeButton}><IonIcon icon={cloudUpload}></IonIcon>Change</IonButton>
            
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Change;