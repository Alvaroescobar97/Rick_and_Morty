import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  arrCharacters: any[];

  constructor(private pjService: PersonajesService) { }

  ngOnInit(): void {
    this.pjService.getAll().then(res=>{

      this.arrCharacters = res.results;
      
      console.log(this.arrCharacters);
    }).catch(err=>{
      console.log(err);
    });
  }

}
