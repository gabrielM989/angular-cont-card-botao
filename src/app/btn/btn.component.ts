import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void{
    this.btnClickEvent.emit({nomeEvento: 'btnClickEvent', isClicked: true}) /* dá para retornar objetos, tipos primitivos (strinh, number, etc) */
  }

}

