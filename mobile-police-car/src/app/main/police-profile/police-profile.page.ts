import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonThumbnail,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'police-profile-app',
  templateUrl: './police-profile.page.html',
  styleUrls: ['./police-profile.page.scss'],
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonThumbnail,
    IonItem,
    IonLabel,
    IonList,
  ],
})

export class PoliceProfile implements OnInit{

  ngOnInit(): void {
    
  }
}