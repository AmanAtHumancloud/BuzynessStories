import React from "react";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import Seo from "../components/Seo";
import { routeSeo } from "../config/seoConfig";

const ContactPage = () => {
  return (
    <>
      <Seo {...routeSeo["/contact"]} canonicalPath="/contact" />
      <div className="w-full">
        <ContactForm />
        <ContactDetails />
      </div>
    </>
  );
};

export default ContactPage;

