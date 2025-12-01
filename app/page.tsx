import Image from "next/image";

// const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex flex-1 items-center justify-center px-4 py-14 sm:px-10 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image
            // src={`${assetPrefix}/la-roche-sketch.svg`}
            src={`/chateau.png`}
            alt="Chateau"
            width={1010}
            height={693}
            priority
            sizes="(min-width: 1280px) 70vw, 100vw"
            className="w-[160%] max-w-none object-contain sm:w-full sm:max-w-[70rem]"
            style={{ opacity: 0.3 }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 px-2 text-center sm:gap-8">
          <Image
            // src={`${assetPrefix}/logo.png`}
            src={`/logo.png`}
            alt="La Roche triple logo"
            width={112}
            height={112}
            priority
            className="w-full max-w-[14rem] sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[26rem] object-contain drop-shadow-sm"
          />
          <p className="rounded-full border border-warm-red/25 bg-white/80 px-5 py-2 text-sm text-brown shadow-sm backdrop-blur sm:text-base">
            Shop & hosting available March 2026
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-deep-blue sm:text-xs">
              BRASSERIE ARTISANALE
            </span>
            {/* <h1 className="hero__title">La Roche</h1> */}
            {/* <p className="hero__subtitle">TRIPLE</p> */}
            <p className="mt-2 max-w-[28rem] text-[0.8rem] uppercase tracking-[0.18em] text-brown sm:mt-3 sm:text-sm sm:tracking-[0.25em]">
              Brewed in the Ardennes — Bold Character, Timeless Craft.
            </p>
          </div>
          <div className="h-px w-24 bg-warm-red/60" aria-hidden="true" />
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-brown sm:text-xs sm:tracking-[0.3em]">
            alc. 8.0 % vol · 330 ml · Brewed in La Roche-en-Ardenne
          </p>
        </div>
      </section>
      <footer className="bg-brown px-6 py-10 text-center text-white sm:py-14">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-xs leading-6 sm:text-sm sm:leading-7">
          <p className="font-serif tracking-[0.12em]">
            <a href="mailto:info@larochetriple.com">info@larochetriple.com</a>
          </p>
          <p className="tracking-[0.08em] sm:tracking-[0.1em]">
            4, route du Tram · 6980 La Roche-en-Ardenne
          </p>
          <Image
            src="/carte.svg"
            alt="Localisation plan for La Roche Triple"
            width={180}
            height={155}
            className="mx-auto w-full max-w-[9rem] object-contain sm:max-w-[10rem]"
            priority
          />
          <p className="tracking-[0.18em] uppercase sm:tracking-[0.2em]">
            alc. 8.0 % vol · 330 ml
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[0.7rem] tracking-[0.24em] text-[#fdf1ed] sm:mt-3 sm:text-xs sm:tracking-[0.3em]">
            {/* <a
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
            </a> */}
            {/* <span aria-hidden="true">|</span> */}
            <span>© 2025 La Roche Triple</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
