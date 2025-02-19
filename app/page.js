import Head from 'next/head';

export default function Page() {
    return (
      <>
        <Head>
            <title>Rainbow Creators</title>
        </Head>
        <header>
          <div className="logoSection">
            <a href="/">
              <h1 className='logo' data-shadow='dang!'>Rainbow Creators</h1>
            </a>
          </div>
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" // Change here
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" /> {/* Change here */}
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /> {/* Change here */}
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /> {/* Change here */}
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" /> {/* Change here */}
              </g>
            </svg>
          </div>
        </header>
        <main>
          <section>
            <article>
              
            </article>
          </section>
        </main>
      </>
    );
  }