import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Setting } from '../Model/setting';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;
  authheaders: HttpHeaders;
  token= '';
  _url=Setting.apiurl;
  constructor(public client: HttpClient) {
    this.headers = new HttpHeaders()
    // .append('Content-Type', 'application/json')
    // .append('Content-Type', 'multipart/form-data')
    // .append('accept', 'application/json')
    .append('x-api-key', '123456');
    this.authheaders=this.headers.append('token',this.token);
  }

  rebuiltHeaders(){
    this.headers = new HttpHeaders()
    // .append('Content-Type', 'application/json')
    // .append('Content-Type', 'multipart/form-data')
    // .append('accept', 'application/json')
    .append('x-api-key', '123456');
    this.authheaders=this.headers.append('token',this.token);
  }

  updateToken(_token){
    this.token=_token;
    this.authheaders=this.headers.append('token',this.token);
    console.log('auth header set',this.authheaders);
  }


  get(url){
    return this.client.get(this._url+url,{headers:this.authheaders});
  }
  post(url,data){
    const _data=new FormData();

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        _data.append(key,data[key])        
      }
    }
    return this.client.post(this._url+url,_data,{headers:this.authheaders});

  }
  postFile(url,data: FormData){
    const fileheaders = new HttpHeaders()
    // .append('Content-Type', 'multipart/form-data')
    .append('accept', 'application/json')
    .append('x-api-key', '123456')
    .append('token',this.token);
    return this.client.post(this._url+url,data,{headers:fileheaders});

  }

  getWithOutAuth(url){
    return this.client.get(this._url+url,{headers:this.headers});
  }
  postWithOutAuth(url,data){
    return this.client.post(this._url+url,data,{headers:this.headers});

  }
  postFileWithOutAuth(url,data: FormData){
    const fileheaders = new HttpHeaders()
    // .append('Content-Type', 'multipart/form-data')
    // .append('accept', 'application/json')
    .append('x-api-key', '123456');
    return this.client.post(this._url+url,data,{headers:fileheaders});
  }
}
