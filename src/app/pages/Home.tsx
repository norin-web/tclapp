import { useState } from "react";
import { app, controls, faq, features, steps, iosNote } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import FaqList from "../components/FaqList";
import Icon from "../components/Icon";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Home() {
  const [tab, setTab] = useState(0);
  return (
    <>
      {/* S01 Hero */}
      <section className="hero">
        <Reveal as="span" className="eyebrow">TV remote for iPhone</Reveal>
        <Split as="h1" className="h1 hero__title" parts={[["Your TCL TV, run from your phone."]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Change channels, launch apps and type with a real keyboard, over your home Wi‑Fi.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download</Btn>
          <span className="muted small">Free on the App Store{iosNote}</span>
        </Reveal>
        <div className="hero__phone">
          <Phone src="/images/screen-dpad.png" alt="TCL Remote main screen with the D-pad" className="phone--xl" />
        </div>
      </section>

      {/* S02 Features */}
      <section className="container fgrid">
        {features.map((f, i) => (
          <Reveal className={`fcard${i === 2 ? " fcard--wide" : ""}`} key={f.lead} delay={i * 60}>
            <span className="fcard__icon"><Icon name={f.icon} /></span>
            <h3 className="h3">{f.lead}<span className="dim">{f.rest}</span></h3>
          </Reveal>
        ))}
      </section>

      {/* S03 Controls: tabs swap the phone screen */}
      <section className="container">
        <div className="controls">
          <div className="controls__text">
            <span className="eyebrow">Controls</span>
            <h2 className="h2">One remote, three ways to use it.</h2>
            <div className="tabs" role="tablist" aria-label="Control modes">
              {controls.map((c, i) => (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={tab === i}
                  className={`tab${tab === i ? " is-on" : ""}`}
                  onClick={() => setTab(i)}
                >
                  <i className="tab__bar" aria-hidden="true" />
                  <b>{c.title}</b>
                  <span>{c.text}</span>
                </button>
              ))}
            </div>
            <p className="controls__note">{controls[tab].text}</p>
          </div>
          <div className="controls__phone phone phone--lg">
            {controls.map((c, i) => (
              <img key={c.key} className={tab === i ? "is-on" : ""} src={img(c.img)} alt={i === tab ? `${c.title} screen` : ""} width={375} height={812} />
            ))}
          </div>
        </div>
      </section>

      {/* S04 Apps */}
      <section className="container duo">
        <Phone src="/images/screen-apps.png" alt="Apps tab with streaming apps" />
        <Reveal className="duo__text">
          <span className="eyebrow">Apps</span>
          <h2 className="h2">Your favorite apps, one tap away.</h2>
          <p className="lead">Launch streaming and music apps from the Apps tab, or from the shortcuts on the side of the remote.</p>
        </Reveal>
      </section>

      {/* S05 AI Chat */}
      <section className="band">
        <div className="container duo duo--flip">
          <Reveal className="duo__text">
            <span className="eyebrow">AI Chat</span>
            <h2 className="h2">Stuck on a setting? Ask.</h2>
            <p className="lead">Tap a suggested question or type your own. Get help connecting your TV to Wi‑Fi, or find something to watch tonight.</p>
          </Reveal>
          <img className="render" src={img("/images/phone-ai-chat.png")} alt="AI Chat screen with suggested questions" width={1134} height={2048} loading="lazy" />
        </div>
      </section>

      {/* S06 How to start */}
      <section className="container section">
        <span className="eyebrow">Getting started</span>
        <h2 className="h2">Connected in three steps.</h2>
        <div className="start">
          <ol className="steps">
            {steps.map((s) => (
              <Reveal as="li" className="steps__item" key={s.title}>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </Reveal>
            ))}
          </ol>
          <img className="render render--sm" src={img("/images/phone-connect.png")} alt="Connect your Device screen listing TCL TVs" width={1040} height={2048} loading="lazy" />
        </div>
      </section>

      {/* S07 FAQ */}
      <section className="band">
        <div className="container faqwrap">
          <h2 className="h2">Frequently asked questions</h2>
          <FaqList items={[faq[0], faq[1], faq[3], faq[6], faq[7]]} />
        </div>
      </section>
    </>
  );
}
