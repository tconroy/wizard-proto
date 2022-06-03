import { useState } from "react";

// we pass these down as props to the individual step components.
export default function useStepState() {
  const stepNameToStateMap = {
    brandName: useState(),
    homepageLayout: useState()
  };

  return {
    ...stepNameToStateMap,
    getStepState(stepName: keyof typeof stepNameToStateMap) {
      return stepNameToStateMap[stepName];
    }
  };
}
