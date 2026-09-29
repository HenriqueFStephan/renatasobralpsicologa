import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-caminho",
  standalone: true,
  template: `
    <div class="banner" role="img" aria-label="Livros e mapas"></div>
    <div class="prose banner-copy">
      <p>
        Em 2004 conclui a Graduação em Psicologia, na Universidade do Oeste Paulista (UNOESTE). Ao sair da Universidade
        temos uma certeza em mente: sabemos pouco! Ali, nos deram referências teóricas, ferramentas de uso prático
        (técnicas) e estágios para conhecer a prática profissional. O início de uma longa jornada.
      </p>
      <p>
        Entre 2005 e 2007, viajava frequentemente a Londrina, para especializar-me em Gestão de Pessoas na Universidade
        Estadual de Londrina (UEL). A princípio havia o interesse de atuar em empresas e um sonho de carreira acadêmica.
        Vivi ambas as experiências, iniciei atuando na área de recursos humanos e dediquei 10 anos estudando o campo do
        trabalho e a saúde mental (da especialização até o doutorado).
      </p>
      <p>
        Conheci o sofrimento mental gerado por mudanças da organização do trabalho após privatização em banco na
        especialização. De 2008 a 2010, no mestrado na Universidade Estadual de Londrina (UEL), propus uma reflexão sobre
        a compreensão do que era saúde do trabalhador para os gestores de saúde pública municipal e estadual do oeste
        paulista, uma vez que eles eram responsáveis por ações de referência. E entre 2011 e 2015, na UNICAMP,
        debrucei-me sobre minha tese de Doutorado: estresse no trabalho e a adaptação e aplicação de uma ferramenta de
        diagnóstico e intervenção para instituições.
      </p>
      <p>
        Durante toda essa jornada, dedicava-me à prática clínica, onde podia conhecer, aprofundar e trabalhar com as
        questões humanas.
      </p>
      <p>
        Em 2021, buscando refinamento técnico dediquei-me ao Curso de Psicanálise para Psicoterapeutas, da Sociedade
        Brasileira de Psicanálise de Campinas – SBPCamp.
      </p>
    </div>
  `,
})
export class CaminhoComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("CAMINHO ACADÊMICO – Dra Renata Sobral");
  }
}
