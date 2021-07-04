import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
  private pname = new BehaviorSubject("Movie App")
  projectname = this.pname.asObservable()

  changepname(myname : string){
    this.pname.next(myname)
  }

  constructor() {

   }
}
