import PromotionalMaterialsSectionOne from "@/components/PromotionalMaterials/PromotionalMaterialsSectionOne";
import PromotionalMaterialsSectionTwo from "@/components/PromotionalMaterials/PromotionalMaterialsSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PromotionalMaterialsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Promotional Materials"
        description="Magic Ventures is a youthful company founded early enough in Kenya to
        deal with the convenience of design, corporate branding, general printing,
        general supplies to all our esteemed clients. Our pride is in the experience
        of delivery of quality production and services."
        time=""
        timeWeekend=""
        phoneNumber=""
        location=""
      />
      <PromotionalMaterialsSectionOne />
      {/* <PromotionalMaterialsSectionTwo /> */}
    </>
  );
};

export default PromotionalMaterialsPage;
