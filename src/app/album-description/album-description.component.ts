import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrl: './album-description.component.css',
})
export class AlbumDescriptionComponent {
  albumId!: string;
  albums?: Album[]=ALBUMS;
  album?:Album[];
  asideAlbum!:any;

  constructor(
    private AlbumsService: AlbumService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.albums = this.AlbumsService.getalbums();
    // Méthode 1 : Récupérer le paramètre ID une seule fois lors de l'initialisation
    this.albumId = this.route.snapshot.paramMap.get('id') || '';
    this.album = this.AlbumsService.getalbums().filter((el)=>{
      el.id==this.albumId
  //  console.log(this.album);
   
      
    })
  }


  getAside(id : string):void{
    this.asideAlbum = this.AlbumsService.getAlbumById(id)
   console.log(this.album);
 
   
  }
}
