import { img } from "../utils/img";

/** App screen in a drawn iPhone bezel, as in the Paper design. */
export default function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <img src={img(src)} alt={alt} width={375} height={812} loading="lazy" />
    </div>
  );
}
