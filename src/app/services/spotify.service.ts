import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio REST de Spotify listo para usar.');
   }

   getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const CABECERAS = new HttpHeaders({
      Authorization: 'Bearer BQC0PQO37QNlr_MlepSmab1kZpNLuh_fAcloRUDwnuvLkApzGf-va33fZG-croONhKbnlfSLS4-6ibxpOk0'
    });
    return this.http.get(url, {headers: CABECERAS});
   }

   getNewReleases() {
    // const CABECERAS = new HttpHeaders({
    //   Authorization: 'Bearer BQC0PQO37QNlr_MlepSmab1kZpNLuh_fAcloRUDwnuvLkApzGf-va33fZG-croONhKbnlfSLS4-6ibxpOk0'
    // });

    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: CABECERAS }).subscribe(data => {
    //   console.log(data);
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: CABECERAS }).pipe(map((data: any) => {
    //   return data.albums.items;
    // }));

    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data.albums.items;
    }));
  }

  getArtistas(termino: string) {
    // const CABECERAS = new HttpHeaders({
    //   Authorization: 'Bearer BQC0PQO37QNlr_MlepSmab1kZpNLuh_fAcloRUDwnuvLkApzGf-va33fZG-croONhKbnlfSLS4-6ibxpOk0'
    // });

    // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers: CABECERAS }).subscribe(data => {
    //   console.log(data);
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers: CABECERAS }).pipe(map((data: any) => {
    //   return data.artists.items;
    // }));

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=CO`).pipe(map((data: any) => {
      return data.tracks;
    }));
  }
}
