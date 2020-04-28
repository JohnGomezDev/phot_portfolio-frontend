import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

import anime from "animejs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public hideLogo: boolean;

  constructor(
    private router: Router,
    private _titleService: Title
  ) {
    
  }

  ngOnInit(): void {
    this.setHideLogo();
    this.setTitleAtStart();
  }

  setHideLogo(): void {
    // Si estas en otra pagina diferente al index o '/' , el logo se esconde
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if(event.url == '/inicio' || event.url == '/') {
          this.hideLogo = false;
        } else {
          this.hideLogo = true;
        }
      }
    });
  }

  // Cambia el titulo de acuerdo a la seccion a la que se navegue
  setTitle(title:string): void {
    this._titleService.setTitle(title);
    this.title = this._titleService.getTitle();
  }

  /* Da valor al titulo al recargar la pagina o iniciar por primera vez, de modo que evita
  poner el titulo por defecto */
  setTitleAtStart() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        let sectionName = event.url.split('/')[1];
        this._titleService.setTitle(sectionName);

        this.title = this._titleService.getTitle();

        this.animateTitleAndMain(); //animacion
      }
    });
  }

  animateTitleAndMain() { //animacion de entrada del titulo y seccion principal
        anime({
            targets: '.logo-box',
            top: ['60%', '30%'],
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 1800,
            delay: 200,
            offset: '-=1600'
        });

        anime({
          targets: 'main',
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 2300,
          delay: 200,
          offset: '-=1600'
        });
  }

}
