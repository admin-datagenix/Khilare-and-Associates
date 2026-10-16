import "../styles/marqueeStrip.css";
const items = [
  "CIVIL ENGINEERING",
  "CONSTRUCTION",
  "STRUCTURAL CONSULTANCY",
  "REAL ESTATE DEVELOPMENT",
  "REDEVELOPMENT",
  "QUALITY • SAFETY • DELIVERY",
];
export default function MarqueeStrip() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((x, i) => (
          <span key={`${x}-${i}`}>
            {x}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
