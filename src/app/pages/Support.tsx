import { useState } from "react";
import { faq, site, type Faq } from "../content/site";
import FaqList from "../components/FaqList";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const topics: Faq["topic"][] = ["Connecting", "Remote", "Subscription"];

export default function Support() {
  const [topic, setTopic] = useState<Faq["topic"] | null>(null);
  const items = topic ? faq.filter((f) => f.topic === topic) : faq;
  return (
    <>
      <section className="container phero phero--short">
        <Reveal as="span" className="eyebrow">Support</Reveal>
        <Split as="h1" className="h1" parts={[["How can we help?"]]} />
      </section>

      <section className="container support">
        <div className="chips" role="group" aria-label="Filter by topic">
          {topics.map((t) => (
            <button key={t} className={`chip${topic === t ? " is-on" : ""}`} aria-pressed={topic === t} onClick={() => setTopic(topic === t ? null : t)}>
              {t}
            </button>
          ))}
        </div>
        <FaqList key={topic ?? "all"} items={items} />
      </section>

      <section className="container">
        <div className="help">
          <div>
            <h2 className="h3">Still need help?</h2>
            <p className="lead lead--sm">Write to us and tell us your TV model.</p>
          </div>
          <Btn href={`mailto:${site.email}`} variant="white">{site.email}</Btn>
        </div>
      </section>
    </>
  );
}
