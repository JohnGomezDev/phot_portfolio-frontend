import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  public rutes: String[];

  constructor(
    private router: Router,
    private _titleService: Title
  ) {
    this.rutes = ['inicio', 'blog', 'galeria', 'contacto', 'info'];
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

  /* Da valor al titulo al recargar la pagina o iniciar por primera vez, de modo que evita
  poner el titulo por defecto */
  setTitleAtStart() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {

        let sectionName = event.url.split('/');
        
        if (sectionName[1] != 'info') { //evitar poner 'info' en el titulo cuando entro a sobre mi o goodlife
          this._titleService.setTitle(sectionName[1]);
        } else {
          this._titleService.setTitle(sectionName[2].replace('-', ' '));
        }

        this.notFoundTitle(sectionName[1]);
        this.title = this._titleService.getTitle();
        this.animateTitleAndMain(); //animacion
      }
    });
  }

  notFoundTitle(rute: String) { //setear titulo para pagina 404
    if(!this.rutes.includes(rute)) {
      this._titleService.setTitle('404 - oops!');
    }
  }

  animateTitleAndMain() { //animacion de entrada del titulo y seccion principal
        anime({
            targets: '.logo-box',
            top: ['60%', '30%'],
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 200,
            offset: '-=1600'
        });

        anime({
          targets: 'main',
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1600,
          delay: 200,
          offset: '-=1600'
        });
  }

  toggleNav() { //Mostrar y esconder nav bar para dispositivos mobiles
    let nav = document.querySelector('nav');
    let isDisplied = getComputedStyle(nav).display;
    
    nav.style.display = isDisplied == 'block' ? 'none' : 'block';
  }

}
