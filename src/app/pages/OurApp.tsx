import { app, appFeatures, specs, storeShots, iosNote } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function OurApp() {
  return (
    <>
      {/* S01 App hero */}
      <section className="container apphero">
        <img className="apphero__icon" src={img("/images/app-icon.png")} alt="TCL Remote app icon" width={168} height={168} />
        <div className="apphero__text">
          <Split as="h1" className="h1" parts={[["TCL Remote"]]} />
          <Reveal as="p" className="lead">TV remote for iPhone. Remote, AI Chat and Apps in one app.</Reveal>
        </div>
        <Reveal className="apphero__cta">
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="muted small">Free on the App Store{iosNote}</span>
        </Reveal>
      </section>

      {/* S02 Store screenshots */}
      <section className="shots" aria-label="App Store screenshots">
        <div className="shots__track">
          {storeShots.map((s, i) => (
            <img key={s} src={img(s)} alt={`App Store screenshot ${i + 1}`} width={1100} height={2390} loading="lazy" />
          ))}
        </div>
      </section>

      {/* S03 Features rows */}
      <section className="container section">
        <h2 className="h2 rows__title">Inside the app</h2>
        <div className="rows">
          {appFeatures.map((f, i) => (
            <Reveal className={`row${i % 2 ? " row--flip" : ""}`} key={f.tag}>
              <div className="row__text">
                <span className="eyebrow">{f.tag}</span>
                <h3 className="h3">{f.title}</h3>
                <p className="lead lead--sm">{f.text}</p>
              </div>
              <Phone src={f.img} alt={`${f.tag} screen`} className="row__phone" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* S04 Specs */}
      <section className="container twocol section">
        <h2 className="h2">Details</h2>
        <dl className="specs">
          {specs.filter(([, v]) => v).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
