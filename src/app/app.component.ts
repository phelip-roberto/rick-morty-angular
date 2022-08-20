import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  chars: any[] = [];
  selected: any;

  filterForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService.getCharacters().subscribe((response: any) => {
      if (response) {
        this.chars = response;
      }
    });
  }

  filterSearch() {
    if (this.filterForm.value.name) {
      this.charactersService
        .getCharacterByName(this.filterForm.value.name)
        .subscribe((response: any) => {
          if (response) {
            this.chars = response;
          } else {
            this.chars = [];
          }
        });
    }
  }

  selectChar(char: any) {
    this.selected = char;
  }
}
