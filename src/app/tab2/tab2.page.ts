import { Component, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImg: string;

  constructor(private database: DatabaseService
    ,private camera: Camera) {}


  publicaciones = [

    
  ];

  @Input() Nombre: string = "";
  @Input() Descripcion: string = "";
  @Input() Ubicacion: string = "";

  agregarPublicacion(): void {
    var nuevaPublicacion: any = {
      "Nombre": "@OmarAlexGarza",
      "Descripcion": this.Descripcion,
      "Ubicacion": this.Ubicacion,
      "Foto": "",
      "FotoP": "assets/imagenes/FotoP.jpg"
    }
    this.database.create('publicaciones',nuevaPublicacion);
    this.database.create('publicacionesusuario',nuevaPublicacion);

}

camara() {
  const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    sourceType: this.camera.PictureSourceType.CAMERA
  };

  this.camera.getPicture(options).then( ( imageData ) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.tempImg = base64Image;
   }, (err) => {
    
   });

}

}
