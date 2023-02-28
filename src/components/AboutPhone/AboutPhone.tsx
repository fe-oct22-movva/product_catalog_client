import React from 'react';
import './AboutPhone.scss';

export const AboutPhone: React.FC = () => {
  return (
    <div className="about">

      <div className="grid-shop-by grid-shop-by--desktop">
        <div className="grid-shop-by__item grid-shop-by__item--desktop-1-10">
          <h2 className="about__header">About</h2>

          <div className="about__brake-line"></div>

          <h3 className="about__title">And then there was Pro</h3>
          <section>
            <div className="about__text">
              <p className="about__text-service">
                A transformative triple‑camera system that adds tons of capability without complexity.
              </p>

              <p>
                An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do. Welcome to the first
                iPhone powerful enough to be called Pro.
              </p>
            </div>
          </section>

          <section>
            <h3 className="about__title">Camera</h3>
            <div className="about__text">Meet the first triple‑camera system to combine cutting‑edge technology with
              the legendary simplicity of iPhone. Capture up to four times more scene. Get
              beautiful images in drastically lower light. Shoot the highest‑quality video in a
              smartphone — then edit with the same tools you love for photos. You&apos;ve never shot with anything like it.</div>
          </section>

          <section>
            <h3 className="about__title">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h3>
            <div className="about__text">iPhone 11 Pro lets you capture videos that are beautifully true to life, with
              greater detail and smoother motion. Epic processing power means it can shoot 4K
              video with extended dynamic range and cinematic video stabilization — all at 60
              fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.</div>
          </section>
        </div>

        <div className="grid-shop-by__item grid-shop-by__item--desktop-13-24">
          <section>
            <h3 className="about__title">Tech specs</h3>

            <div className="about__brake-line"></div>
            <div className="about__spec">
              <div className="about__spec-names">
                <p className="about__info">Screen</p>
                <p className="about__info">Resolution</p>
                <p className="about__info">Processor</p>
                <p className="about__info">RAM</p>
                <p className="about__info">Built in memory</p>
                <p className="about__info">Camera</p>
                <p className="about__info">Zoom</p>
                <p className="about__info">Cell</p>
              </div>

              <div className="about__spec-specs">
                <p className="about__info">6.1” OLED</p>
                <p className="about__info">2688x1242</p>
                <p className="about__info">Apple A12 Bionic</p>
                <p className="about__info">3 GB</p>
                <p className="about__info">64 GB</p>
                <p className="about__info">12 Mp + 12 Mp + 12 Mp (Triple)</p>
                <p className="about__info">Optical, 2x</p>
                <p className="about__info">GSM, LTE, UMTS</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
