import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { environment as config } from "../enviroment";

@Injectable({ providedIn: "root" })
export class BaseService {
  constructor(private httpClient: HttpClient) {}
  private getUrlApi() {
    return config.host;
  }

  public getData(path: string): Observable<any> {
    return this.httpClient.get(`${this.getUrlApi()}/${path}`).pipe(
      map(res => {
        return res;
      }),
      catchError(err => throwError(err)),
    );
  }

  public postData(path: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.getUrlApi()}/${path}`, body).pipe(
      map(res => {
        return res;
      }),
      catchError(err => throwError(err)),
    );
  }

  public putData(path: string, body: any): Observable<any> {
    return this.httpClient.put(`${this.getUrlApi()}/${path}`, body).pipe(
      map(res => {
        return res;
      }),
      catchError(err => throwError(err)),
    );
  }
}
