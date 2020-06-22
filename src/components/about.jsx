import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">Om meg</span>
                      <h2 className="colorlib-heading">Hvem er jeg??</h2>
                      <p>
                        Jeg er født og oppvokst i Norge, moren min er fra
                        Filipinene og faren min er fra Iran. Så jeg er en litt
                        rar blanding haha! Jeg ser meg selv som en nerd som er
                        besatt av kreativt arbeid, helt siden jeg var liten
                        benyttet jeg mye av fritiden foran skjermen. Som for
                        eksempel å spille nintendo spill, eller å lage
                        animasjoner med naboen med Adobe Flash CS3 når jeg var
                        10 år gammel!
                      </p>
                      <p>
                        Jeg er oppnådde nylig en bachelor grad innen Intelligente
                        Systemer og ser etter en jobb som innebærer frontend Webutvikling. Jeg er mest glad i frontend koding
                        med React, HTML/CSS og javascript.
                      </p>
                      <p>
                        I fritiden liker jeg å benytte tiden til å spille spill
                        som f.eks granblue fantasy, Arknights, Legend of Zelda
                        breath of the wild og lignende. Jeg elsker også å tegne
                        digitalt med Clip Studio Paint og laste opp verket mitt
                        på twitter, å se mitt kreative verk bedre seg over tid
                        er noe som jeg virkelig er glad i.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Hva gjør jeg?</span>
                <h2 className="colorlib-heading">
                  Her er noen av mine Kunnskaper og ferdigheter
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Utvikling </h3>
                    <p>
                      Jeg har kunnskap om å bygge websider med Javascript, React
                      og HTML/CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Maskin til Maskinlæring og Embedded Systems</h3>
                    <p>
                      Med en bakgrunn innen intelligente systemer, kan jeg skape
                      fysiske "duppe dingser" og koble dem opp på nett, som for
                      eksempel en komponent som tar opp hjertebanker per minut
                      (BMI), tar dataene og lager en oversikt på nett.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Medier og Kommunikasjon</h3>
                    <p>
                      Jeg har kunnskaper med bilde, film og grafisk redigering,
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
