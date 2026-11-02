import { useState } from "react";
import type { Faq } from "../content/site";

const Chevron = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Accordion with big chevrons; the first question starts open. */
export default function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div className={`faq__item${on ? " is-open" : ""}`} key={f.q}>
            <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
              <span>{f.q}</span>
              <Chevron />
            </button>
            <div className="faq__a" id={`faq-${i}`} role="region">
              <div className="faq__inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
