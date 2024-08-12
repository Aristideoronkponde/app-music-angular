import { Component } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrl: './album-description.component.css'
})
export class AlbumDescriptionComponent {

  albums?:Album[]
  constructor(private AlbumsService :AlbumService ){}

  ngOnInit():void{
    this.albums=this.AlbumsService.getalbums()
  }
}
