import ContactInfo from "@/components/Contact/ContactInfo";
import Volunteer from "@/components/SharedComponent/Volunteer";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Endeavor",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Nasze lokalizacje"
      />
      <ContactInfo />
      <Volunteer />
    </>
  );
};

export default page;
