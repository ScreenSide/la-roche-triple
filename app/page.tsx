import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__background">
          <Image
            src="/la-roche-sketch.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__background-image"
            aria-hidden="true"
          />
        </div>
        <div className="hero__content">
          <Image
            src="/logo.png"
            alt="La Roche triple logo"
            width={112}
            height={112}
            priority
            className="hero__crest"
          />
          <div className="hero__heading">
            <span className="hero__label">BRASSERIE ARTISANALE</span>
            {/* <h1 className="hero__title">La Roche</h1> */}
            {/* <p className="hero__subtitle">TRIPLE</p> */}
            <p className="hero__tagline">
              Brewed in the Ardennes — Bold Character, Timeless Craft.
            </p>
          </div>
          <div className="hero__divider" aria-hidden="true" />
          <p className="hero__note">
            alc. 8.0 % vol · 330 ml · Brewed in La Roche-en-Ardenne
          </p>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer__content">
          <p className="footer__line footer__line--serif">
            Brasserie Lupulus SRL — Courtil 50, 6671 Gouvy, Belgium
          </p>
          <p className="footer__line">
            4, route du Tram · 6980 La Roche-en-Ardenne
          </p>
          <p className="footer__line footer__line--accent">
            alc. 8.0 % vol · 330 ml
          </p>
          <div className="footer__links">
            <a href="#legal" className="footer__link">
              Legal Notice
            </a>
            <span aria-hidden="true">|</span>
            <a href="#contact" className="footer__link">
              Contact
            </a>
            <span aria-hidden="true">|</span>
            <span>© 2025 La Roche Triple</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
