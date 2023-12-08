import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from '../../../environments/environment';

// import { Job } from "../models/job";
@Injectable({
  providedIn: "root",
})
export class RestApiService {
// Define API
  constructor(private http: HttpClient) {}
  /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/
// Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
// HttpClient API get() method => Fetch device list
  getDevices(): Observable<any[]> {
    return this.http
      .post<any[]>("/api" + "/explorer_device/list",{
        "username": environment.USERNAME,
        "token": environment.TOKEN
      })                                                   // post devices request
      .pipe(retry(1), catchError(this.handleError)); //, catchError(this.handleError)
  }
  search(search:string): Observable<any[]> {
    return this.http
      .post<any[]>("/api" + "/explorer_device/searchlist",{
        "username": environment.USERNAME,
        "token": environment.TOKEN,
        "search": search
      })                                                   // post devices request
      .pipe(retry(1), catchError(this.handleError)); //, catchError(this.handleError)
  }

  handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
