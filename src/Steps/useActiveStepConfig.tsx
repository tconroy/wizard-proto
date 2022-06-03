import { BrandNameStep, HomepageLayoutStep } from "./";
import type { WizardState } from "../Wizard";

import { sleep } from "../utils";
import { BrandNamePreview } from "./BrandNameStep";

export interface ActiveStepConfig {
  contentElement: JSX.Element;
  previewElement?: JSX.Element;
  onNext: () => Promise<void>;
  onPrev: () => Promise<void>;
}

export default function useActiveStepConfig(
  wizardState: WizardState,
  stepState: StepState
): ActiveStepConfig {
  const stepConfigs = {
    brandNameStep: {
      contentElement: <BrandNameStep {...stepState.brandNameStep} />,
      previewElement: <BrandNamePreview />,
      onNext: async () => {
        console.log("BrandName: making some expensive API call...");
        await sleep(2500);
        console.log("BrandName: Complete!");
      },
      onPrev: async () => {
        console.log("BrandName: onPrev!");
      }
    },
    homepageLayoutStep: {
      contentElement: <HomepageLayoutStep {...stepState.homepageLayoutStep} />,
      onNext: async () => {
        console.log("homepageLayout: onNext!");
      },
      onPrev: async () => {
        console.log("homepageLayout: onPrev!");
      }
    }
  };

  return stepConfigs[wizardState.activeName];
}
