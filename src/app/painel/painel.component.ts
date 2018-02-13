import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model'
import {FRASES} from './frase-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  /*OnInit é uma interface do angular core e quando criamos um componente 
  utilizando o angular cli ele automaticamente faz o componente implementar 
  esta interface*/

  public frases: Frase[]    = FRASES
  public instrucao: string  = 'Traduza a frase:'
  public resposta: string   = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta.')
      this.rodada++
      this.progresso   = this.progresso + (100 / this.frases.length)
      this.atualizaRodada()
    } else {
      alert('A tradução está incorreta.')
    }

    
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
