import BrandingSectionOne from "@/components/Branding/BrandingSectionOne";
import BrandingSectionTwo from "@/components/Branding/BrandingSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const BrandingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Branding"
        description="Build your own Brand with our unique designs that represent your image, personality, values and attitude."
        time=""
        timeWeekend=""
        phoneNumber=""
        location=""
      />
      <BrandingSectionOne />
      {/* <BrandingSectionTwo /> */}
    </>
  );
};

export default BrandingPage;
