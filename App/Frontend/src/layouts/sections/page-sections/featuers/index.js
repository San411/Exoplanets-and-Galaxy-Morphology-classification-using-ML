// Sections components
import GalaxyLayout from "layouts/sections/components/GalaxyLayout";
import View from "layouts/sections/components/View";

// Features page components
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";

// Features page components code
import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";

function Features() {
  return (
    <GalaxyLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <View title="Features 1" code={featuresOneCode}>
        <FeaturesOne />
      </View>
    </GalaxyLayout>
  );
}

export default Features;
