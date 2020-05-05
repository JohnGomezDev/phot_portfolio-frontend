import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  public sectionName: string;

  constructor(
    private _titleService: Title
  ) {
   }

  ngOnInit(): void {
    this.setPageContent();
  }

  //Poner contenido de acuerdo a la seccion donde estes en esta pagina (sobre mi o buena vida)
  setPageContent(): void { 
    this.sectionName = this._titleService.getTitle() == 'sobre mi' ? 'about' : 'life';
  }
}
