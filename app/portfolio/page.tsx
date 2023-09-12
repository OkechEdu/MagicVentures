import PortfolioSectionOne from "@/components/Portfolio/PortfolioSectionOne";
import PortfolioSectionTwo from "@/components/Portfolio/PortfolioSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PortfolioPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="Our creative solutions backed by a Team of Creatives heads who are always looking for effective ways to meet your needs, with years of experience we have completed over 50+ We Aspire To become the leading digital marketer in the East African Region"
        time=""
        timeWeekend=""
        phoneNumber=""
        location=""
      />
      <PortfolioSectionOne />
      {/* <PortfolioSectionTwo /> */}
    </>
  );
};

export default PortfolioPage;
