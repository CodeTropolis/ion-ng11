import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users$:Observable<any>;

  constructor( private firestore: AngularFirestore) {
   this.users$ = this.firestore.collection('users').valueChanges({idField: 'id'})
      //.subscribe(users => this.users = users);
  }

  trackUser(index, user) { 
    console.log(`@CodeTropolis ~ file: tab1.page.ts ~ line 21 ~ trackUser ~ user`, user);
    return user.id; 
  }

}
