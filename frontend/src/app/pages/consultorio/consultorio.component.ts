import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-consultorio",
  standalone: true,
  template: `
    <div class="pair prose">
      <img src="assets/office-1.jpg" alt="Consultório, janelas e luz natural" />
      <p>
        Estamos de casa nova! O novo espaço da clínica é naturalmente iluminado pelas grandes janelas. Pensamos no
        conforto e acolhimento. O seu cantinho do café e água está renovado.
      </p>
    </div>
    <div class="pair prose">
      <p>
        Cada item da sala conta um pouquinho da minha história. Logo de cara verá o armário que era da alfaiataria do vô
        Kiko desde 1940, agora acomodando alguns dos meus livros de estudo.
      </p>
      <img src="assets/office-2.jpg" alt="Armário e livros do consultório" />
    </div>
    <div class="pair prose">
      <img src="assets/office-3.jpg" alt="Quadros na sala do consultório" />
      <p>
        Pela sala, quadros que representam alguns lugares que conheci e onde pude observar outras culturas e suas formas
        de viver: o quebra-cabeças do quadro “O beijo” de Gustav Klimt, a “árvore da vida” de Klimt, a imagem da rua
        Bergasse, 19, consultório de Freud em Viena, a art nouveau de Mucha e o beijo entre Eros e Psiquê. Inspirações
        para que você possa falar livremente, tudo o que vier à mente.
      </p>
    </div>
    <div class="prose">
      <p>
        Estarei atenta na escuta e juntos exploraremos os pensamentos e sentimentos que surgirem desse encontro. Se não
        for possível vir pessoalmente, podemos fazer a sessão modernamente online, que contará com a mesma discrição e
        cuidado.
      </p>
    </div>
  `,
})
export class ConsultorioComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("O NOVO CONSULTÓRIO – Dra Renata Sobral");
  }
}
