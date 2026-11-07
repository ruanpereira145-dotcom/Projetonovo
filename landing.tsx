'use client';
import {loja, imagens, waLink} from '../lib/loja';

function hide(e: React.SyntheticEvent<HTMLImageElement>) { e.currentTarget.style.visibility = 'hidden'; }

function Depoimento() {
  const a = loja.avaliacao;
  if (!a.texto) return null;
  const partes = a.destaque && a.texto.includes(a.destaque) ? a.texto.split(a.destaque) : [a.texto];
  const iniciais = a.cliente.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className="lp-review">
      {a.nota && <p className="lp-score"><strong>{a.nota}</strong> da galera que criou com a gente <span>✦ Avaliações cheias de carinho</span></p>}
      <blockquote>
        “{partes[0]}{partes.length > 1 && <><mark>{a.destaque}</mark>{partes[1]}</>}”
      </blockquote>
      <div className="lp-client">
        {a.foto ? <img src={a.foto} alt={'Foto de ' + a.cliente} width={48} height={48} loading="lazy" /> : <span className="lp-avatar" aria-hidden="true">{iniciais}</span>}
        <p><strong>{a.cliente}</strong>Cliente {loja.nome}</p>
      </div>
    </div>
  );
}

export default function Landing() {
  const wa = waLink();
  const insta = loja.instagram ? `https://www.instagram.com/${loja.instagram}/` : '';
  const ext = {target: '_blank', rel: 'noreferrer'};
  const faixa = <>Sua ideia <b>✦</b> feito sob medida <b>✦</b> Camada por camada <b>✦</b> Do seu jeito <b>✦</b> Com a sua personalidade <b>✦</b> </>;

  return (
    <div className="lp">
      <p className="lp-bar"><strong>novidade</strong> {loja.aviso}</p>

      <header className="lp-header">
        <div className="lp-wrap lp-header-row">
          <a href="#inicio" className="lp-logo" aria-label={loja.nome + ', início'}>
            <span className="lp-logo-mark">{loja.nomeCurto}</span><span className="lp-logo-sub">SOLUÇÕES</span>
          </a>
          <nav className="lp-nav" aria-label="Principal">
            <a href="#inicio">Home</a>
            <a href="/catalogos/todos">Portfólio</a>
            <a href="/catalogos/todos">Colecionáveis</a>
            <a href="/catalogos/todos">Utilidades</a>
            <a href="#orcamento">Orçamentos</a>
          </nav>
          <a className="lp-btn lp-btn-sm" href={wa} {...ext}>Fale Conosco</a>
        </div>
      </header>

      <main id="inicio">
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="lp-tag">Impressão <b>3D</b> sem limites</p>
              <h1>Você imagina.<span>A {loja.nomeCurto} cria! <i aria-hidden="true">↗</i></span></h1>
              <p className="lp-lede">Do <strong>3D para a sua realidade.</strong> A gente transforma a sua referência, seu presente ou aquela ideia maluca em uma criação feita só para você.</p>
              <div className="lp-ctas">
                <a className="lp-btn" href={wa} {...ext}>Fazer orçamento</a>
                <a className="lp-btn lp-btn-ghost" href="/catalogos/todos">Explorar peças</a>
              </div>
              <ul className="lp-meta">
                <li><strong>{loja.cidade}</strong> • {loja.entrega}</li>
                <li>Feito para a sua ideia</li>
                <li>Do presente ao projeto sob medida</li>
              </ul>
            </div>
            <div className="lp-hero-art" aria-hidden="true">
              <span className="lp-glow" />
              <img className="lp-float lp-f1" src={imagens.flutuante1} alt="" onError={hide} />
              <img className="lp-float lp-f2" src={imagens.flutuante2} alt="" onError={hide} />
              <img className="lp-float lp-f3" src={imagens.flutuante3} alt="" onError={hide} />
            </div>
          </div>
          <a className="lp-scroll" href="#como-funciona">role para explorar</a>
        </section>

        <div className="lp-marquee" aria-hidden="true"><div className="lp-marquee-track"><span>{faixa}</span><span>{faixa}</span></div></div>

        <section className="lp-sec" id="como-funciona">
          <div className="lp-wrap">
            <p className="lp-kicker">Nada de prateleira pronta</p>
            <h2>Sua ideia merece <em>nascer diferente.</em></h2>
            <p className="lp-text">A {loja.nome} é um ateliê para criações que têm a sua cara. Você imagina, conta para a gente e acompanha a magia ganhando forma.</p>
            <ol className="lp-steps">
              <li><b>[ 01 ]</b><span>Você conta<br />a ideia</span></li>
              <li><b>[ 02 ]</b><span>A gente dá<br />vida a ela</span></li>
              <li><b>[ 03 ]</b><span>Sua criação<br />chega até você</span></li>
            </ol>
          </div>
        </section>

        <section className="lp-sec lp-why" id="por-que">
          <div className="lp-wrap lp-why-grid">
            <div>
              <p className="lp-kicker">Por que criar com a {loja.nomeCurto}?</p>
              <h2>Feito para ser <em>a sua cara.</em></h2>
              <p className="lp-text">Não importa se você chegou com um rabisco, uma referência ou uma ideia ainda meio maluca: aqui, ela vira algo único, com cuidado em cada camada.</p>
              {loja.numeros.length > 0 && (
                <dl className="lp-stats">
                  {loja.numeros.map(n => <div key={n.texto}><dt>{n.valor}</dt><dd>{n.texto}</dd></div>)}
                </dl>
              )}
            </div>
            <div className="lp-why-art"><img src={imagens.organizador} alt="" loading="lazy" onError={hide} /></div>
          </div>
        </section>

        <section className="lp-sec lp-community">
          <div className="lp-wrap">
            <p className="lp-kicker">A comunidade está criando</p>
            <h2>Quem já <em>criou com a gente?</em></h2>
            <p className="lp-text">Gente de verdade, criações que saíram do feed e foram parar nas casas, mesas e coleções por aí.</p>
            <div className="lp-gallery">
              {imagens.galeria.map(g => <figure key={g.src}><img src={g.src} alt={g.alt} loading="lazy" onError={hide} /></figure>)}
            </div>
            <Depoimento />
            {insta && <a className="lp-insta" href={insta} {...ext}>↗ Acompanhe @{loja.instagram} no Instagram</a>}
          </div>
        </section>

        <section className="lp-sec lp-final" id="orcamento">
          <div className="lp-wrap">
            <div className="lp-cta-box">
              <h3>Tem uma ideia doida por aí? Vamos criá-la.</h3>
              <a className="lp-btn" href={wa} {...ext}>Começar meu projeto →</a>
            </div>
            {loja.grupoWhatsApp && (
              <a className="lp-group" href={loja.grupoWhatsApp} {...ext}><strong>Grupo de leilões</strong>WhatsApp {loja.nome}</a>
            )}
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-wrap lp-footer-grid">
          <div>
            <a href="#inicio" className="lp-logo" aria-label={loja.nome + ', início'}>
              <span className="lp-logo-mark">{loja.nomeCurto}</span><span className="lp-logo-sub">SOLUÇÕES</span>
            </a>
            <p>Você imagina. A {loja.nomeCurto} cria. {loja.rodape}</p>
          </div>
          <div>
            <h4>Navegação</h4>
            <a href="#como-funciona">Como funciona</a>
            <a href="/catalogos/todos">Explorar portfólio</a>
            <a href="#por-que">Por que a {loja.nomeCurto}?</a>
            {loja.grupoWhatsApp && <a href={loja.grupoWhatsApp} {...ext}>Grupo de leilões</a>}
            {loja.termosDeUso && <a href={loja.termosDeUso}>Termos de uso</a>}
          </div>
          <div>
            <h4>Fale com a gente</h4>
            <a href={wa} {...ext}>Pedir orçamento</a>
            {insta && <a href={insta} {...ext}>Instagram</a>}
            <a href={wa} {...ext}>Whatsapp</a>
          </div>
          <div>
            <h4>Informações</h4>
            <p>{loja.cidade.replace('-', ' — ')}</p>
            <p>{loja.entrega}.</p>
            <p>Criações sob medida, feitas camada por camada.</p>
          </div>
        </div>
        <div className="lp-wrap lp-copy">© {new Date().getFullYear()} {loja.nome}. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
