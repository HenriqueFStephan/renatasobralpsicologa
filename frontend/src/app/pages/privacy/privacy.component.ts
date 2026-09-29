import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-privacy",
  standalone: true,
  template: `
    <article class="prose privacy">
      <h2>Quem somos</h2>
      <p>O endereço do nosso site é: https://renatasobralpsicologa.com.br/</p>
      <h2>Quais dados pessoais coletamos e porque</h2>
      <h2>Comentários</h2>
      <p>
        Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de comentários, além
        do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam.
      </p>
      <p>
        Uma sequência anonimizada de caracteres criada a partir do seu e-mail (também chamada de hash) poderá ser enviada
        para o Gravatar para verificar se você usa o serviço. A política de privacidade do Gravatar está disponível aqui:
        https://automattic.com/privacy/. Depois da aprovação do seu comentário, a foto do seu perfil fica visível
        publicamente junto de seu comentário.
      </p>
      <h2>Formulários de contato</h2>
      <p>
        Nos formulários de contato, coletamos e mantemos as informações: Nome, e-mail, telefone e nome da empresa, para
        efetuar o atendimento ao consumidor.
      </p>
      <p>
        Newslatter
      </p>
      <p>
        O formulário de Newslatter enviar nome e endereço de e-mail, no qual armazenamos para enviar campanhas de e-mail
        marketing. Ao Assinar uma newslatter, você nos permite enviar de e-mails informativos e de ofertas.
      </p>
      <h2>Cookies</h2>
      <p>
        Nós utilizamos cookies. Cookies são pequenos arquivos de textos simples que sites armazenam em seu navegador para
        salvar suas preferências e configurações. Por exemplo, quando você acessa um site pela primeira vez, que faz uso
        de cookies, este site envia um arquivo de texto com suas preferências para o seu navegador, como: Região de onde
        você está acessando, seu endereço de e-mail, idioma escolhido, cores, produtos que você poderá gostar com base em
        suas pesquisas, e etc. Quando você acessar o site novamente, seu navegador irá enviar este arquivo para o site,
        desta forma as suas configurações e preferências serão aplicadas automaticamente sem que você precise configurar
        tudo de novo (a menos que você queira).
      </p>
      <p>
        Ao deixar um comentário no site, você poderá optar por salvar seu nome, e-mail e site nos cookies. Isso visa seu
        conforto, assim você não precisará preencher seus dados novamente quando fizer outro comentário. Estes cookies
        duram um ano.
      </p>
      <p>
        Se você tem uma conta e acessa este site, um cookie temporário será criado para determinar se seu navegador aceita
        cookies. Ele não contém nenhum dado pessoal e será descartado quando você fechar seu navegador.
      </p>
      <p>
        Quando você acessa sua conta no site, também criamos vários cookies para salvar os dados da sua conta e suas
        escolhas de exibição de tela. Cookies de login são mantidos por dois dias e cookies de opções de tela por um ano.
        Se você selecionar “Lembrar-me”, seu acesso será mantido por duas semanas. Se você se desconectar da sua conta, os
        cookies de login serão removidos.
      </p>
      <p>
        Se você editar ou publicar um artigo, um cookie adicional será salvo no seu navegador. Este cookie não inclui
        nenhum dado pessoal e simplesmente indica o ID do post referente ao artigo que você acabou de editar. Ele expira
        depois de 1 dia.
      </p>
      <p>Tipos de cookies que usamos</p>
      <p>
        Essencial: Alguns cookies são essenciais para que você possa experimentar todas as funcionalidades do nosso site.
        Eles nos permitem manter as sessões do usuário e prevenir quaisquer ameaças à segurança. Eles não coletam ou
        armazenam nenhuma informação pessoal. Por exemplo, esses cookies permitem que você faça login em sua conta e
        adicione produtos à sua cesta e finalize a compra com segurança.
      </p>
      <p>
        Estatísticas: Esses cookies armazenam informações como o número de visitantes do site, o número de visitantes
        únicos, quais páginas do site foram visitadas, a origem da visita, etc. Esses dados nos ajudam a compreender e
        analisar o desempenho do site e onde precisa de melhorias. Utilizamos o Cookie do Google para gerar esses
        relatório no Google Analytics.
      </p>
      <p>
        Marketing: Nosso site exibe anúncios. Esses cookies são usados para personalizar os anúncios que mostramos a você
        para que sejam significativos para você. Esses cookies também nos ajudam a acompanhar a eficiência dessas
        campanhas publicitárias.
      </p>
      <p>
        As informações armazenadas nesses cookies também podem ser usadas por provedores de anúncios de terceiros para
        exibir anúncios em outros sites no navegador também.
      </p>
      <p>
        Funcionais: são os cookies que auxiliam certas funcionalidades não essenciais do nosso site. Essas funcionalidades
        incluem a incorporação de conteúdo como vídeos ou o compartilhamento de conteúdo no site em plataformas de mídia
        social.
      </p>
      <h2>Mídia incorporada de outros sites</h2>
      <p>
        Artigos neste site podem incluir conteúdo incorporado como, por exemplo, vídeos, imagens, artigos, etc. Conteúdos
        incorporados de outros sites se comportam exatamente da mesma forma como se o visitante estivesse visitando o
        outro site.
      </p>
      <p>
        Estes sites podem coletar dados sobre você, usar cookies, incorporar rastreamento adicional de terceiros e
        monitorar sua interação com este conteúdo incorporado, incluindo sua interação com o conteúdo incorporado se você
        tem uma conta e está conectado com o site.
      </p>
      <h2>Com quem partilhamos seus dados</h2>
      <p>Não compartilhamos seus dados com terceiros.</p>
      <h2>Por quanto tempo mantemos os seus dados</h2>
      <p>
        Se você deixar um comentário, o comentário e os seus metadados são conservados indefinidamente. Fazemos isso para
        que seja possível reconhecer e aprovar automaticamente qualquer comentário posterior ao invés de retê-lo para
        moderação.
      </p>
      <p>
        Para usuários que se registram no nosso site (se houver), também guardamos as informações pessoais que fornecem no
        seu perfil de usuário. Todos os usuários podem ver, editar ou excluir suas informações pessoais a qualquer momento
        (só não é possível alterar o seu username). Os administradores de sites também podem ver e editar estas
        informações.
      </p>
      <h2>Quais os seus direitos sobre seus dados</h2>
      <p>
        Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um arquivo exportado dos dados
        pessoais que mantemos sobre você, inclusive quaisquer dados que nos tenha fornecido. Também pode solicitar que
        removamos qualquer dado pessoal que mantemos sobre você. Isto não inclui nenhuns dados que somos obrigados a
        manter para propósitos administrativos, legais ou de segurança. Para solicitar, basta enviar um e-mail para
        faleconosco@vacinec.com.br que retornaremos em até 28 dias.
      </p>
      <h2>Para onde enviamos seus dados</h2>
      <p>Comentários de visitantes podem ser marcados por um serviço automático de detecção de spam.</p>
      <h2>Suas informações de contato</h2>
      <p>
        Para solicitar alteração, remoção ou cópia dos seus dados pessoais, basta enviar um e-mail para
        contato@renatasobralpsicologa.com.br que retornaremos em até 28 dias.
      </p>
      <h2>Como protegemos seus dados</h2>
      <p>
        Fique tranquilo(a)! Suas informações estão seguras! nosso site possui certificado SSL (site Seguro) para você
        navegar, processar e enviar informações com segurança. Também utilizamos plugin de segurança no site.
      </p>
      <p><em>Nos reservamos o direito de atualizar estes termos e condições de uso sem qualquer aviso prévio</em></p>
    </article>
  `,
})
export class PrivacyComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("Política de privacidade – Dra Renata Sobral");
  }
}
