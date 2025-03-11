import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonButtons,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonHeader,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonMenuButton,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
} from 'ionicons/icons';

@Component({
  selector: 'main-app',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonButtons,
    IonSplitPane,
    IonMenu,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class MainPage {
  public appPages = [
    { title: 'Police profile', url: '/main/police-profile', icon: 'mail' },
    { title: 'Folder', url: '/main/folder/outbox', icon: 'paper-plane' },
    { title: 'Vehicle', url: '/main/folder/favorites', icon: 'heart' },
    { title: 'Init control', url: '/main/folder/control', icon: 'heart' },
  ];
  constructor() {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
    });
  }
}
