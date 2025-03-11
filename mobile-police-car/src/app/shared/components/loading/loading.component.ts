import { Component, OnInit } from '@angular/core';
import { LoadingStateService } from './loading.state.service';
import {
  LoadingController 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone:true,
  imports:[]
})
export class LoadingComponent  implements OnInit {
  loading!:HTMLIonLoadingElement
  constructor(private loadingService:LoadingStateService,private loadingController:LoadingController) { }

  ngOnInit() {
    this.creatingLoadingController()
  
    this.loadingService.loading
    .subscribe(status => {
      if(status){
        this.showLoadingComponent()
      }else{
        this.closeLoadingComponent()
      }
    })
  }

  async creatingLoadingController(){
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
  }

  showLoadingComponent(){   
    this.loading.present();
  }

  closeLoadingComponent(){
    if(this.loading){
      this.loading.dismiss();
    }
  }

}
