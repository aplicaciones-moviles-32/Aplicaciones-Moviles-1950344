import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private database: DatabaseService) {}

  publicacionesusuario = [

  
  ];

  ngOnInit(){
    this.database.getAll('publicacionesusuario').then(firebaseResponse => {
      firebaseResponse.subscribe(publicacionesRef => {
        this.publicacionesusuario = publicacionesRef.map(publicacionRef =>{
          let publicacion=publicacionRef.payload.doc.data();
          publicacion['id'] = publicacionRef.payload.doc.id;
          return publicacion;
        }
          )
      })
    })
  }

}
