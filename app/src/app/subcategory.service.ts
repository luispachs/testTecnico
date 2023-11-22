import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private httpClient:HttpClient) { }

  public get(path:string){
    return this.httpClient.get(path);
  }
}
