import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-agende",
  standalone: true,
  template: `
    <section class="sched-row">
      <img class="photo" src="assets/schedule-1.jpg" alt="Atendimento presencial" />
      <div class="sched-label">
        <img src="assets/icon-presencial.png" alt="Icon: in-person session" />
        <h2>ATENDIMENTO PRESENCIAL</h2>
      </div>
    </section>
    <section class="sched-row">
      <img class="photo" src="assets/schedule-2.jpg" alt="Atendimento online" />
      <div class="sched-label">
        <img src="assets/icon-online.png" alt="Icon: online session" />
        <h2>ATENDIMENTO ONLINE</h2>
      </div>
    </section>
    <section class="sched-book">
      <img src="assets/icon-agendamento.png" alt="Icon: schedule" />
      <h2>AGENDE A SUA CONSULTA</h2>
    </section>
    <iframe
      class="doctoralia"
      title="Renata Cristina Sobral Stephan - Doctoralia.com.br"
      src="https://www.doctoralia.com.br/ajax/marketing/doctor/widget/big_with_calendar/renata-cristina-sobral-stephan/null?customUtm=null&amp;id=savw3ae4ip&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=https%3A%2F%2Frenatasobralpsicologa.com.br%2Fagende-sua-consulta%2F&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false&amp;saasonly=false&amp;expand_calendar=false"
    ></iframe>
    <ul class="contact-list">
      <li>
        <a href="https://maps.app.goo.gl/mPVkNpkw149mVERG9" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" /></svg>
          <span>Rua Doutor Antônio Augusto de Almeida, 54 - Cidade Universitária I (Barão Geraldo) - CEP 13083-755 - Campinas/SP</span>
        </a>
      </li>
      <li>
        <a href="https://wa.me/5519998772525?text=Ol%C3%A1" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M6 2h12v20H6zM8 4h8v2H8zm0 4h8v2H8z" /></svg>
          <span>Telefone / WhatsApp: (19) 99877-2525</span>
        </a>
      </li>
      <li>
        <a href="mailto:contato@renatasobralpsicologa.com.br">
          <svg viewBox="0 0 24 24"><path d="M3 6h18v12H3zm9 7L5 8v8h14V8z" /></svg>
          <span>contato@renatasobralpsicologa.com.br</span>
        </a>
      </li>
    </ul>
    <iframe
      class="map-frame"
      title="Mapa do consultório"
      src="https://maps.google.com/maps?q=Rua%20Doutor%20Ant%C3%B4nio%20Augusto%20de%20Almeida%2C%2054&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
    ></iframe>
  `,
})
export class AgendeComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("AGENDE SUA CONSULTA – Dra Renata Sobral");
  }
}
