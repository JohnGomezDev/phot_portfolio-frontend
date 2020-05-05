import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public isSending: boolean;
  public sent: boolean;
  public btnText: string;

  constructor(
    private _formService: FormService
  ) { 
    this.isSending = false;
    this.sent = false;
    this.btnText = 'Enviar Mensaje';
  }

  ngOnInit(): void {
  }

  onSubmit(form): void {

    this.isSending = true;
    this.btnText = 'Enviando...'; //cambiar texto de boton submit

    this._formService.sendForm(form.value).subscribe((res) => { //Llamada al servicio
      this.sent = true;
      this.btnText = 'Enviar Mensaje';
      form.reset();
    });
  } 
}
