import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="container contact">
      <div className="contact__text">
        <Reveal as="span" className="eyebrow">Contact and feedback</Reveal>
        <Split as="h1" className="h1" parts={[["Write to us."]]} />
        <Reveal as="p" className="lead">Questions, ideas or a bug report. We read every message.</Reveal>
        <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="contact__form">
        <MailForm
          subject="TCL Remote — feedback"
          submit="Send message"
          fields={[
            { name: "name", label: "Name", auto: "name" },
            { name: "email", label: "Email", type: "email", required: true, auto: "email" },
            { name: "topic", label: "Topic", options: ["Connection problem", "Remote and controls", "Subscription", "Idea or feedback", "Something else"] },
            { name: "message", label: "Message", textarea: true, required: true },
          ]}
        />
      </div>
    </section>
  );
}
