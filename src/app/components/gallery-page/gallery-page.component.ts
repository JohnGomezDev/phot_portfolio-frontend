import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/services/pictures.service';
import { PictureModel } from '../../models/picture';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  public url: String;
  public pictures: PictureModel[];

  constructor(
    private _picturesService: PicturesService
  ) {
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getPictures();
  }

  // Llamada al servicio para obtener imagenes
  getPictures(): void {
    this._picturesService.getPictures().subscribe((res) => {
      this.pictures = res.response;
    });
  }
}
