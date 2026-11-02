import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="container notfound">
      <h1 className="h1">Page not found</h1>
      <p className="lead">This page doesn't exist. Let's get you back to the remote.</p>
      <Btn to="/">Back to home</Btn>
    </section>
  );
}
