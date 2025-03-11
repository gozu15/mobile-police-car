import { Observable } from "rxjs";
import { RequestControls } from "./request.controls";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class FactoryApi implements RequestControls{

    constructor(private httpClient:HttpClient){}
    
    get<T>(route:string): Observable<T> {
        return this.httpClient.get<T>(route)
    }
    create<T, U>(route:string,data: U): Observable<T> {
        return this.httpClient.post<T>(route,data)
    }
    update<T, U>(route:string,data: U): Observable<T> {
        throw new Error("Method not implemented.");
    }
    delete<T>(route:string,id: number): Observable<T> {
        throw new Error("Method not implemented.");
    }

}