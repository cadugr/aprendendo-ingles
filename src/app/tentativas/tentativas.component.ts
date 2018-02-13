import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Coracao} from '../shared/coracao.model'



@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
   }

  ngOnChanges() {
    console.log('Tentativas recebidas do painel: ', this.tentativas)
  } 

  ngOnInit() {
    
  }

}
