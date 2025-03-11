import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestControls } from "src/app/shared/controls/request.controls";
import { AuthModel } from "./models/auth.model";
import { environment } from "src/environments/environment.prod";
import { FactoryApi } from "src/app/shared/controls/factory-api.controls";
import { LoginResponseModel } from "./models/login.model";

@Injectable({
    providedIn:'root'
})

export class AuthenticationApiService{
    private apiUrl = environment.apiUrl
    private routeApi = `${this.apiUrl}auth`
    
    constructor(private factoryApiService:FactoryApi){}

    get():Observable<AuthModel[]>{
        return this.factoryApiService.get<AuthModel[]>(this.routeApi)
    }

    login(userCredentials:AuthModel):Observable<LoginResponseModel>{
        return this.factoryApiService.create<LoginResponseModel,AuthModel>(`${this.routeApi}/login`,userCredentials)
    }

}