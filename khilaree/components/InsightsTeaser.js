import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { siteImages } from "../config/images";
import "../styles/insightsTeaser.css";
export default function InsightsTeaser() {
  return (
    <section className="section insights-teaser">
      <div className="container insights-grid">
        <div>
          <div className="eyebrow">Our Gallery</div>
          <h2 className="title">Moments of Progress</h2>
          <p className="copy">
            From construction sites to completed landmarks, explore the visual
            side of the journey.
          </p>
          <Link href="/insights" className="primary-round">
            Explore Gallery{" "}
            <span className="round-btn">
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="mosaic">
          {siteImages.gallery.map((x, i) => (
            <img
              key={x}
              className={`m${i}`}
              src={x}
              alt="Khilare project gallery"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
