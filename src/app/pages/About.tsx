import { principles } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      {/* S01 About hero */}
      <section className="container phero">
        <Reveal as="span" className="eyebrow">About</Reveal>
        <Split as="h1" className="h1 phero__title" parts={[["A remote you can't lose between the cushions."]]} />
        <Reveal as="p" className="lead phero__sub" delay={150}>
          TCL Remote turns your iPhone into a remote for your TCL TV. It talks to the TV over your home Wi‑Fi, so there is nothing to plug in.
        </Reveal>
      </section>

      {/* S02 Approach */}
      <section className="band">
        <div className="container twocol">
          <h2 className="h2">Our approach</h2>
          <Reveal className="approach">
            <p>Most evenings start the same way: the remote is somewhere else. Your phone is already in your hand, so we put the remote there.</p>
            <p className="dim">The rest lives one tap away: a touchpad, a numpad, a keyboard for search, your apps, and a chat for when something on the TV doesn't work.</p>
          </Reveal>
        </div>
      </section>

      {/* S03 Design */}
      <section className="design">
        <Reveal className="design__text">
          <span className="eyebrow">Design</span>
          <h2 className="h3">Shaped like the remote you already hold.</h2>
          <p className="lead lead--sm">D‑pad, touchpad and volume each get a large control of their own, so the things you press most take a single tap.</p>
        </Reveal>
        <img className="design__img" src={img("/images/design-render.jpg")} alt="D-pad, touchpad and volume controls next to the remote screen" width={1300} height={2382} loading="lazy" />
      </section>

      {/* S04 Principles */}
      <section className="container section">
        <h2 className="h2">Three things we hold to</h2>
        <div className="principles">
          {principles.map((p, i) => (
            <Reveal className={`principle${i === 0 ? " is-accent" : ""}`} key={p.title} delay={i * 60}>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* S05 Scene */}
      <section className="scene" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={img("/images/scene-mobile.jpg")} />
          <img src={img("/images/scene.jpg")} alt="" width={2880} height={1400} loading="lazy" />
        </picture>
      </section>
    </>
  );
}
