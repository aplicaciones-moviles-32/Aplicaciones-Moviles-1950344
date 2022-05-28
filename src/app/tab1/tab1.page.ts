import { Component, Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  publicaciones = [

  
  ];


  constructor(private database: DatabaseService) {}


ngOnInit(){
  this.database.getAll('publicaciones').then(firebaseResponse => {
    firebaseResponse.subscribe(publicacionesRef => {
      this.publicaciones = publicacionesRef.map(publicacionRef =>{
        let publicacion=publicacionRef.payload.doc.data();
        publicacion['id'] = publicacionRef.payload.doc.id;
        return publicacion;
      }
        )
    })
  })
}

}
