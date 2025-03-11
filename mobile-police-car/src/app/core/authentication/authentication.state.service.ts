import { Injectable } from "@angular/core";
import { AuthenticationApiService } from "./authentication.api.service";
import { AuthModel } from "./models/auth.model";
import { LoadingStateService } from "src/app/shared/components/loading/loading.state.service";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { MessageAlertToastService } from "src/app/shared/components/message-alert-toast/message-alert-toast.service";

@Injectable({providedIn:'root'})

export class AuthenticationStateService{

    constructor(private authenticationApiService:AuthenticationApiService,
                private router:Router,
                private loadingStateService:LoadingStateService,
                private messageAlertToastService:MessageAlertToastService
    ){}

    logIn(credentials:AuthModel){
        this.loadingStateService.startLoading()
        this.authenticationApiService.login(credentials)
        .subscribe({
            next:response => {
                this.loadingStateService.closeLoading()
                if(response.token){
                    console.log("token",response.token)
                    this.router.navigate(['/main'])
                }
            },
            error:error => {
                this.loadingStateService.closeLoading()
                this.messageAlertToastService.openToast()
            }
        })
    }

    closeLoading(){
        this.loadingStateService.closeLoading()
    }
}