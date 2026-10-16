import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/teamFeature.css";
export default function TeamFeature() {
  return (
    <section id="leadership" className="team-feature">
      <div className="container team-box">
        <div className="team-leader-card">
          <div className="team-photo">
            <img
              src="/images/khilare.png"
              alt="Ravindra Shankar Khilare - Pawar"
            />
          </div>
          <div className="team-identity-card">
            <div className="team-identity-name">
              RAVINDRA SHANKAR KHILARE - PAWAR
            </div>
            <div className="team-identity-role">
              <span className="role-part">
                <span className="team-identity-dot"></span>
                CHIEF PROMOTER
              </span>
              <span className="role-separator">•</span>
              <span className="role-part">KHILARE & ASSOCIATES</span>
            </div>
          </div>
        </div>

        <div className="team-content">
          <div className="eyebrow">Leadership</div>
          <h2>
            Engineering with experience.
            <br />
            <span>Building with responsibility.</span>
          </h2>
          <p>
            Chief Promoter of Khilare & Associates, Past Jt. Secretary CREDAI
            Maharashtra and Past President CREDAI Sangli. The firm combines
            practical civil engineering knowledge with disciplined project
            delivery.
          </p>
          <div className="team-cta-wrap">
            <Link href="/studio" className="team-link">
              Know More
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
