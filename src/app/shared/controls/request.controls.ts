import { Observable } from "rxjs";

export interface RequestControls{
    get<T>(apiRoute:string):Observable<T>
    create<T,U>(apiRoute:string,data:U):Observable<T>
    update<T,U>(apiRoute:string,data:U):Observable<T>
    delete<T>(apiRoute:string,id:number):Observable<T>
}