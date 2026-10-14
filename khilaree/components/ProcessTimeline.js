"use client";
import {motion} from "framer-motion";
import {FiArrowRight} from "react-icons/fi";
import Link from "next/link";
import "../styles/processTimeline.css";
const steps=[
 ["01","Site Acquisition","Identifying strong locations and opportunities with long-term potential.","/work"],
 ["02","Planning & Design","Turning requirements into practical layouts, approvals and technical plans.","/approach"],
 ["03","Construction","Coordinating skilled teams, materials, quality and progress on site.","/expertise"],
 ["04","Completion","Finishing, quality checks and a professional handover to the client.","/contact"]
];
export default function ProcessTimeline(){return <section className="process-section"><div className="container">
 <div className="process-heading"><div><div className="eyebrow">Our Process</div><h2 className="title">From Land to Landmark.</h2></div><p className="copy">A disciplined process designed to keep every stage transparent, controlled and focused on quality.</p></div>
 <div className="timeline">{steps.map(([n,t,d,href],i)=><motion.div className={`timeline-item ${i%2?"right":"left"}`} key={t} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.65,delay:i*.12}}>
   <div className="timeline-dot"><span>{n}</span><FiArrowRight/></div><div className="timeline-card"><div className="timeline-img"><img src={i===0?"/images/hero1.png":i===1?"/images/studio.jpg":i===2?"/images/hero2.png":"/images/hero.jpg"} alt={t}/></div><div className="timeline-copy"><h3>{t}</h3><p>{d}</p><Link href={href}>Explore <FiArrowRight/></Link></div></div>
 </motion.div>)}</div>
 </div></section>}