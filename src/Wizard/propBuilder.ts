import type { WizardState } from "../Wizard";
import type {
  NextButtonProps,
  PrevButtonProps,
  ProgressIndicatorProps
} from "../Wizard/Wizard";
import { ActiveStepConfig } from "../Steps/useActiveStepConfig";

export function getPrevButtonProps(
  wizardState: WizardState,
  activeStepConfig: ActiveStepConfig
): PrevButtonProps {
  const disabled = wizardState.isLoading || !wizardState.hasPrevStep;

  return {
    onClick: async () => {
      try {
        wizardState.setIsLoading(true);
        await activeStepConfig?.onPrev?.();
        wizardState.goToPreviousStep();
      } catch (e) {
        console.warn("oh noes! ", e);
      } finally {
        wizardState.setIsLoading(false);
      }
    },
    disabled
  };
}

export function getProgressIndicatorProps(
  wizardState: WizardState,
  stepState: StepState
): ProgressIndicatorProps {
  return {
    stepNames: wizardState.stepNames,
    currentIndex: wizardState.activeIndex
  };
}

export function getNextButtonProps(
  wizardState: WizardState,
  activeStepConfig: ActiveStepConfig
): NextButtonProps {
  return {
    onClick: async () => {
      try {
        wizardState.setIsLoading(true);
        await activeStepConfig?.onNext?.();
        wizardState.goToNextStep();
      } catch (e) {
        console.warn("oh noes! ", e);
      } finally {
        wizardState.setIsLoading(false);
      }
    },
    disabled: wizardState.isLoading || !wizardState.hasNextStep
  };
}
