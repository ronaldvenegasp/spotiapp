import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {  }

  ngOnInit() {
  }

  buscar(termino: string) {
    if (termino.length > 0) {
      console.log(termino);
      this.loading = true;
      this.spotify.getArtista(termino).subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      });
    } else {
      this.artistas = [];
      this.loading = false;
    }
  }

}
