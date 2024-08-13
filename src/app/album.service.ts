import { Injectable } from '@angular/core';
import { Album } from './album';
import { ALBUMS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  
albums:Album []=ALBUMS;


  constructor() { }

  getalbums():Album[]{
    return this.albums
  }


  getAlbumById(id:string){
    const album = this.albums.find((album:Album)=>album.id === id)
    return album;
  }
  
}
