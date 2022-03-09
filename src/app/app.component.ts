import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-23-tarde';

  cardConteudo: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industr "

  alertar(){
    alert('Você clicou no botão')
  }

  alertar2(e:any){
    console.log('Evento executado')
    console.log(e)
  }
}
