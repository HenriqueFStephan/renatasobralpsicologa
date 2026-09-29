import { Component } from "@angular/core";

@Component({
  selector: "app-instagram",
  standalone: true,
  template: `
    <section class="ig">
      <a class="ig-handle" href="http://www.instagram.com/renatasobral.psicologa/" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            fill="#717c7d"
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.6A4.4 4.4 0 1 0 16.4 12 4.4 4.4 0 0 0 12 7.6zm6.2-.9a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z"
          />
        </svg>
        renatasobral.psicologa
      </a>
      <h2>EM NOSSO INSTAGRAM</h2>
      <div class="ig-grid">
        <a class="ig-card" href="https://www.instagram.com/p/DVgykutkfIj/" target="_blank" rel="noopener">
          <img src="assets/ig-1.jpg" alt="Você acha que sabe sobre a menopausa, até perceber" />
          <span>Você acha que sabe sobre a menopausa, até perceber</span>
        </a>
        <a class="ig-card" href="https://www.instagram.com/p/DHRt92bsffe/" target="_blank" rel="noopener">
          <img src="assets/ig-2.jpg" alt="O peso do que nunca foi dito" />
          <span>🔍 O peso do que nunca foi dito Nem tudo o que nos</span>
        </a>
        <a class="ig-card" href="https://www.instagram.com/reel/DHM96Ebse71/" target="_blank" rel="noopener">
          <img src="assets/ig-3.jpg" alt="A menopausa não é só uma mudança hormonal" />
          <span>🔍 A menopausa não é só uma mudança hormonal, mas t</span>
        </a>
        <a class="ig-card" href="https://www.instagram.com/reel/DGggCOURSM6/" target="_blank" rel="noopener">
          <img src="assets/ig-4.jpg" alt="O Carnaval é tempo de alegria" />
          <span>🎭💙 O Carnaval é tempo de alegria, encontros e muit</span>
        </a>
      </div>
    </section>
  `,
})
export class InstagramComponent {}
