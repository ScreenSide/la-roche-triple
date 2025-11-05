import Image from "next/image";

// const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex flex-1 items-center justify-center px-6 py-16 sm:px-10 md:py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image
            // src={`${assetPrefix}/la-roche-sketch.svg`}
            src={`/la-roche-sketch.svg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.14 }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex w-full max-w-[34rem] flex-col items-center gap-8 text-center">
          <Image
            // src={`${assetPrefix}/logo.png`}
            src={`/logo.png`}
            alt="La Roche triple logo"
            width={112}
            height={112}
            priority
            className="h-[32rem] w-[32rem] max-w-full object-contain"
          />
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-[0.6em] text-deep-blue">
              BRASSERIE ARTISANALE
            </span>
            {/* <h1 className="hero__title">La Roche</h1> */}
            {/* <p className="hero__subtitle">TRIPLE</p> */}
            <p className="mt-3 max-w-[28rem] text-sm uppercase tracking-[0.25em] text-brown">
              Brewed in the Ardennes — Bold Character, Timeless Craft.
            </p>
          </div>
          <div className="h-px w-24 bg-warm-red/60" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.3em] text-brown">
            alc. 8.0 % vol · 330 ml · Brewed in La Roche-en-Ardenne
          </p>
        </div>
      </section>
      <footer className="bg-brown px-6 py-12 text-center text-white sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-sm leading-7">
          <p className="font-serif tracking-[0.12em]">
            <a href="mailto:info@larochetriple.com">info@larochetriple.com</a>
          </p>
          <p className="tracking-[0.1em]">
            4, route du Tram · 6980 La Roche-en-Ardenne
          </p>
          <p className="tracking-[0.2em] uppercase">
            alc. 8.0 % vol · 330 ml
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs tracking-[0.3em] text-[#fdf1ed]">
            <a
              href="#legal"
              className="transition-colors duration-200 hover:text-warm-red"
            >
              Legal Notice
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-warm-red"
            >
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
