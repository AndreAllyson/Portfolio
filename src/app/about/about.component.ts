import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  title = 'about';
  som = ''

  constructor(){
    
    

  }

}

// Como manupular o arquivo typeScript no angular
// Não estou sabendo por o código; O que deve ser feito para conseguir fazer o 'onclick' funcionar? -> deve ser criado um constructor ( não sei o porquê!? ); Vou pesquisar na documentação o que tem falando a respeito
// Tudo que sei que para por os códigos precisa de um contructor(); No site não encontrei a explicação do uso explicitamente, só consegui descobrir por conta de vídeos
// O que eu vou fazer para conseguir aprender angular pela própria documetação?