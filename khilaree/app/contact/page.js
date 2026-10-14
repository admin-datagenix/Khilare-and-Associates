"use client";

import Footer from "../../components/Footer";
import { EnquirySection } from "../../components/CompanySections";
import "../../styles/contactPage.css";

export default function Contact() {
  return (
    <>
      <main className="contact-page">
        <EnquirySection />
      </main>

      <Footer />
    </>
  );
}
