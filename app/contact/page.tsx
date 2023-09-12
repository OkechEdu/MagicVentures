import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in-touch with us on any questions you have in regards to our services."
        time="Open Monday to Friday: 8:00 AM - 5:00 PM"
        timeWeekend="Open Saturdays: 8:00 AM - 2:00 PM"
        phoneNumber="+254113263993"
        location="Sameer Business Park, Suite 330, Mombasa Road, Nairobi Kenya"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
