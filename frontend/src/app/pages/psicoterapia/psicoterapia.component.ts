import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-psicoterapia",
  standalone: true,
  template: `
    <blockquote class="quote align-end">
      <p>“Do mal estar atual, podem surgir uma elaboração e uma transformação. ”</p>
      <p class="who">André Green</p>
    </blockquote>
    <div class="prose" style="margin-top: 22px">
      <p>
        Fazer terapia é como estar à beira de um lago, onde se imagina estarem tesouros ou terrores de sua vida. Mergulhar
        nesse lago pode lhe trazer sensações de alívio ou não. Você pode mergulhar fundo ou boiar na superfície, mas vai
        perceber que o lago é parte de sua vida e possivelmente deixar de desejar que ele simplesmente seque.
      </p>
      <p>
        A psicoterapia é indicada quando há sofrimento com uma causa mais ou menos consciente, expressa com maior ou menor
        clareza, tal como: luto, problemas nos relacionamentos, dificuldades no sexo, conflitos nos estudos e/ou trabalho,
        doenças físicas ou emocionais etc. O sofrimento mobiliza a procurar alívio, que é trabalhado na relação
        paciente-terapeuta na busca de suas razões mais profundas.
      </p>
      <p>
        Trabalho com Psicoterapia Psicanalítica, conjunto de teorias e técnicas que visam ajudar o paciente a falar
        livremente de si, e a partir dessa fala, entrar em contato com conteúdos que escapam à sua compreensão
        (inconscientes), que influenciam sua forma de agir, pensar e sentir.
      </p>
      <p>
        Os atendimentos são para adultos e casais, em sessões presenciais ou online (conforme orientação e aprovação do
        Conselho Federal De Psicologia).
      </p>
    </div>
  `,
})
export class PsicoterapiaComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("PSICOTERAPIA – Dra Renata Sobral");
  }
}
