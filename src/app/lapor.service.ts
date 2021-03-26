import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http' ;
import {catchError} from 'rxjs/operators' ;
import {throwError, Observable} from 'rxjs' ;
import {laporin} from '../laporin' ;
@Injectable({
  providedIn: 'root'
})
export class LaporService {

  constructor(private http : HttpClient) { }

  getData():Observable<laporin[]>{
    return this.http.get<laporin[]>("http://localhost:3000/test").pipe(
      catchError((err : HttpErrorResponse) =>{
        return throwError(err.message)
      }) 
    );
  }

  postData(data : any){
    return this.http.post("http://localhost:3000/test", data).toPromise() ;
  }

  deleteData(id : string){
    let url = "http://localhost:3000/test/" + id ;

   return this.http.delete(url).toPromise() ;
  }

  getOne(id : string) : Observable<laporin[]> {
    return this.http.get<laporin[]>("http://localhost:3000/test/" + id).pipe(
      catchError((err : HttpErrorResponse) =>{
        return throwError(err.message)
      }) 
    );
  }

  searchData(data : string):Observable<laporin[]>{
    return this.http.get<laporin[]>("http://localhost:3000/search/" + data).pipe(
      catchError((error : HttpErrorResponse) => {
        return throwError(error.message)
      })
    );
  }

  login(data : any){
    return this.http.post<any>("http://localhost:3000/login", data) ;
  }

  register( data : any){
    return this.http.post<any>("http://localhost:3000/register", data) ;
  }
  
  loggedin(){
    return !!localStorage.getItem('token') ;
  }

  sendToken(data : any){
    
   return this.http.post<any>("http://localhost:3000/token" , data);
  }
}
