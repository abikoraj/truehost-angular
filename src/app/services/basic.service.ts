import { ApiService } from './api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Cls } from '../Model/cls';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  classes: Cls[] = [];
  loaded=false;
  onLoaded: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private client: ApiService,private auth:AuthserviceService) { 
    this.client.get('cls/list').subscribe((res:any[])=>{
      
      res.forEach(cls => {
          this.classes.push({
            id:cls.id,
            name:cls.name,
            sections:cls.sections.map(o=>{return {id:o.id,name:o.name}})
          });
      });
      this.loaded=true;
      console.log(this.classes);
      this.onLoaded.emit(null);
    },(err)=>{

    })
  }
}
