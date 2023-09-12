import StationarySectionOne from "@/components/Stationary/StationarySectionOne";
import StationarySectionTwo from "@/components/Stationary/StationarySectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const StationaryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Stationary"
        description="Magic Ventures is a youthful company founded early enough in Kenya to
        deal with the convenience of design, corporate branding, general printing,
        general supplies to all our esteemed clients. Our pride is in the experience
        of delivery of quality production and services."
        time=""
        timeWeekend=""
        phoneNumber=""
        location=""
      />
      <StationarySectionOne />
      {/* <StationarySectionTwo /> */}
    </>
  );
};

export default StationaryPage;
