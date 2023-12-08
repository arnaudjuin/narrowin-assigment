import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
// import { Job } from "../models/job";
@Injectable({
  providedIn: "root",
})
export class RestApiService {

}
