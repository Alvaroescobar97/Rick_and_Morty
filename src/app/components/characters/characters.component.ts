import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes/personajes.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  arrCharacters: any[];
  page: number;
  maxPages: number;

  constructor(private pjService: PersonajesService) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.serviceCall();
  }

  serviceCall(): void{
    this.pjService.getAll(this.page).then(res => {
      this.arrCharacters = res.results;
      this.maxPages = res.info.pages;
    }).catch(err => {
      console.log(err);
    });
  }

  anterior(): void{
    if (this.page > 1){
      this.page--;
      this.serviceCall();
    }
  }

  siguiente(): void{
    if (this.page < this.maxPages){
      this.page++;
      this.serviceCall();
    }
  }
}
