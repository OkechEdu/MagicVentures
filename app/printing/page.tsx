import PrintingSectionOne from "@/components/Printing/PrintingSectionOne";
import AboutSectionTwo from "@/components/Printing/PrintingSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PrintingSectionTwo from "@/components/Printing/PrintingSectionTwo";

const PrintingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Printing"
        description="At Magic Ventures we make a lasting impressing promoting your business or special event. We've got a wide range variety of printing products to fit what you are looking for.."
        time=""
        timeWeekend=""
        phoneNumber=""
        location=""
      />
      <PrintingSectionOne />
      {/* <PrintingSectionTwo /> */}
    </>
  );
};

export default PrintingPage;
