import { getLocaleEraNames } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

    @Input() /* o @Input() em cada propriedade, faz o Angular entender que essas propriedades podem receber valores externos */
    titulo: string = 'Título'

    @Input()
    subtitulo: string = 'Subtítulo'

    @Input()
    conteudo: string = 'Conteúdo'

    @Input()
    bg: string = ''


 
}
