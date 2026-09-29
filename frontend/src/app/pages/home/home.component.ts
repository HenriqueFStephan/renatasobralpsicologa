import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <blockquote class="quote">
      <p>
        “…um profissional que tenta aliviar as dores do viver à força de escuta e de diálogo, interrogando as motivações
        conscientes ou inconscientes dos sujeitos que lhe pedem ajuda.”
      </p>
      <p class="who">Contardo Calligaris</p>
    </blockquote>
    <div class="home-split">
      <img src="assets/portrait.png" alt="Renata Sobral" />
      <div class="prose">
        <p>
          Viver tem suas dificuldades e cada um sofre em algum momento. Sou uma profissional que acolhe as dores humanas.
          Aprendi com a Psicologia e as experiências da vida a compreender e valorizar a saúde mental. Foi uma trajetória
          longa de formação, que se inicia pela criança tímida que fui, muito interessada no conhecimento. Conhecer algo
          novo, mesmo que com dificuldades era uma forma de viajar, imaginar e explorar o mundo. O ensino superior parecia
          uma promessa de aprofundamento. Espantei-me ao perceber que ali se iniciava algo de uma vida toda. Conhecer não
          se dá apenas na academia, pelo conhecimento formal. Estar com pessoas, conhecer suas histórias, viver
          experiências, trocar ideias, explorar lugares reais e imaginários, dividir os medos, alegrias e tristezas sempre
          proporcionará conhecer algo incrível.
        </p>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("Dra Renata Sobral");
  }
}
