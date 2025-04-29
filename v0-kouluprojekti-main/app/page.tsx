"use client"

import { useState } from "react"

export default function Home() {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const toggleAccordion = (key: string) => {
    setActiveKey(activeKey === key ? null : key)
  }

  return (
    <>
      {/* Responsiivinen navigaatio Hampurilais-valikolla */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Bootstrap Demo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#carousel">
                  Karuselli
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#grid">
                  Ruudukko
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cards">
                  Kortit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#accordion">
                  Haitari
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#table">
                  Taulukko
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Kuvakaruselli */}
      <section id="carousel" className="section">
        <div className="container">
          <h2 className="section-title">Kuvakaruselli</h2>
          <div id="demoCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demoCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/id/1018/1200/400"
                  className="d-block w-100"
                  alt="Maisemakuva vuoristosta"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Luonnon kauneus</h5>
                  <p>Upea maisemakuva vuoristosta ja järvestä.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/id/1015/1200/400"
                  className="d-block w-100"
                  alt="Jokimaisema vuoristossa"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Joki ja vuoret</h5>
                  <p>Kaunis jokimaisema vuoristossa.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/id/1019/1200/400"
                  className="d-block w-100"
                  alt="Merimaisema auringonlaskussa"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Meren rauha</h5>
                  <p>Rauhallinen merimaisema auringonlaskun aikaan.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demoCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Edellinen</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demoCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Seuraava</span>
            </button>
          </div>
        </div>
      </section>

      {/* Ruudukko */}
      <section id="grid" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Ruudukko</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Sarake 1</h3>
                <p>Tämä on ensimmäinen sarake ruudukossa. Bootstrap-ruudukko jakaa sisällön 12 sarakkeeseen.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Sarake 2</h3>
                <p>Tämä on toinen sarake ruudukossa. Responsiivisuus toimii eri näyttökokojen mukaan.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Sarake 3</h3>
                <p>Tämä on kolmas sarake ruudukossa. Mobiililaitteilla sarakkeet pinotaan päällekkäin.</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Leveämpi sarake</h3>
                <p>
                  Tämä sarake vie puolet leveydestä suuremmilla näytöillä. Bootstrap-ruudukko on joustava ja mukautuva.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Toinen leveämpi sarake</h3>
                <p>
                  Tämä sarake vie myös puolet leveydestä suuremmilla näytöillä. Pienemmillä näytöillä sarakkeet
                  pinotaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kortit */}
      <section id="cards" className="section">
        <div className="container">
          <h2 className="section-title">Kortit</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100" data-card-hover>
                <img src="https://picsum.photos/id/26/400/180" className="card-img-top" alt="Kirjoja hyllyssä" />
                <div className="card-body">
                  <h5 className="card-title">Ensimmäinen kortti</h5>
                  <p className="card-text">
                    Tämä on ensimmäisen kortin sisältö. Kortit ovat joustavia sisältökontteja.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Lue lisää
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100" data-card-hover>
                <img src="https://picsum.photos/id/96/400/180" className="card-img-top" alt="Kahvikuppi pöydällä" />
                <div className="card-body">
                  <h5 className="card-title">Toinen kortti</h5>
                  <p className="card-text">
                    Tämä on toisen kortin sisältö. Kortit sopivat hyvin tuotteiden tai artikkelien esittelyyn.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Lue lisää
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100" data-card-hover>
                <img
                  src="https://picsum.photos/id/42/400/180"
                  className="card-img-top"
                  alt="Kannettava tietokone pöydällä"
                />
                <div className="card-body">
                  <h5 className="card-title">Kolmas kortti</h5>
                  <p className="card-text">
                    Tämä on kolmannen kortin sisältö. Korttien korkeus on sama riippumatta sisällön määrästä.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Lue lisää
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Haitari */}
      <section id="accordion" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Haitari</h2>
          <div className="accordion" id="demoAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${activeKey === "item1" ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion("item1")}
                  aria-expanded={activeKey === "item1"}
                  aria-controls="collapseOne"
                >
                  Ensimmäinen osio
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${activeKey === "item1" ? "show" : ""}`}
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  <strong>Tämä on ensimmäisen osion sisältö.</strong> Haitarikomponentti mahdollistaa sisällön
                  piilottamisen ja näyttämisen tarpeen mukaan. Tämä säästää tilaa ja auttaa käyttäjää keskittymään
                  olennaiseen sisältöön.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${activeKey === "item2" ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion("item2")}
                  aria-expanded={activeKey === "item2"}
                  aria-controls="collapseTwo"
                >
                  Toinen osio
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${activeKey === "item2" ? "show" : ""}`}
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  <strong>Tämä on toisen osion sisältö.</strong> Haitarikomponentti on hyödyllinen esimerkiksi usein
                  kysyttyjen kysymysten esittämiseen tai muuhun sisältöön, joka halutaan jakaa osioihin.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${activeKey === "item3" ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion("item3")}
                  aria-expanded={activeKey === "item3"}
                  aria-controls="collapseThree"
                >
                  Kolmas osio
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${activeKey === "item3" ? "show" : ""}`}
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  <strong>Tämä on kolmannen osion sisältö.</strong> Haitarikomponentti on saavutettava ja toimii myös
                  näppäimistöllä. Käyttäjä voi navigoida osioiden välillä tab-näppäimellä ja avata/sulkea osioita enter-
                  tai välilyöntinäppäimellä.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table */}
      <section id="table" className="section">
        <div className="container">
          <h2 className="section-title">Taulukko</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <caption>Esimerkki taulukko - Suomen suurimmat kaupungit</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Kaupunki</th>
                  <th scope="col">Väkiluku</th>
                  <th scope="col">Pinta-ala (km²)</th>
                  <th scope="col">Perustettu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Helsinki</td>
                  <td>656 920</td>
                  <td>214,25</td>
                  <td>1550</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Espoo</td>
                  <td>292 913</td>
                  <td>312,32</td>
                  <td>1458</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Tampere</td>
                  <td>241 672</td>
                  <td>689,59</td>
                  <td>1779</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Vantaa</td>
                  <td>237 231</td>
                  <td>240,35</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Oulu</td>
                  <td>207 327</td>
                  <td>3 817,52</td>
                  <td>1605</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Bootstrap Demo</h5>
              <p>
                Esimerkki Bootstrap-komponenteista: responsiivinen navigaatio, kuvakaruselli, ruudukko, kortit, haitari
                ja taulukko.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>&copy; {new Date().getFullYear()} Bootstrap Demo</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
