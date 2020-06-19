import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Tidslinje</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Bachelor grad i Intelligente Systemer - Høyskolen
                          Kristiania <span> Oppnåd 2020 - Februar</span>
                        </h2>
                        <p>
                          Jeg har nylig avsluttet en bachelor grad innenfor
                          intelligente systemer hos Høyskolen Kristiania. Dette
                          innebærer generell kode forståelse med språkene: Java,
                          Javascript, C++, C, HTML/CSS, C#, React og inkluderer
                          Maskin til Maskin kommunikasjon og Embedded Systems.
                          Intelligente Systemer i seg selv er litt vanskelig å
                          forklare på sparket, men kort forklart er det teorien
                          bak automatisering. Som for eksempel en automatisk
                          støvsuger, gressklipper eller en automatisert bil.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Medier og Kommunikasjon - Roald Amundsen Videregående
                          <span> Oppnåd 2014 - Juli</span>
                        </h2>
                        <p>
                          Medier og kommunikasjon vg1 og v2, og
                          Studieforberedende Vg3 innen medier og kommunikasjon.
                          Her drev vi mye med live action filmer, film
                          redigering, illustrering og grafisk design. Vi
                          benyttet mange av adobe programmene blant annet: Adobe
                          Photoshop, Illustrator, Indesign, Flash, og Premiere
                          Pro. Det var også generell studie kompetanse som
                          matte, naturfag og lignende.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
