// Sections components
import GalaxyLayout from "layouts/sections/components/GalaxyLayout";
// import View from "layouts/sections/components/View";

// PageHeaders page components
// import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// PageHeaders page components code
// import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function GalaxyHeaders() {
  return (
    <GalaxyLayout
      title="Galaxy Morphology"
      breadcrumb={[
        { label: "Galaxy Morphology", route: "/sections/page-sections/Galaxy" },
        { label: "Page Headers" },
      ]}
    >
      {/* <View code={headerOneCode} height="40rem">
        <HeaderOne />
      </View> */}
    </GalaxyLayout>
  );
}

export default GalaxyHeaders;
