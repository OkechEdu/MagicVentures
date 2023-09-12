import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Magic Ventures is a youthful company founded early enough in Kenya to
        deal with the convenience of design, corporate branding, general printing,
        general supplies to all our esteemed clients. Our pride is in the experience
        of delivery of quality production and services."
        time=""
        timeWeekend=""
        phoneNumber=""
        location=""
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
