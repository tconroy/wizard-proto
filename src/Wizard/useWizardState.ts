import { useState, useMemo } from "react";
import { stepNames } from "../Steps";

interface WizardValues {
  activeIndex: number;
  activeName: string;
  stepCount: number;
  stepNames: Readonly<Array<string>>;
  hasNextStep: boolean;
  hasPrevStep: boolean;
  isLoading: boolean;
}

interface WizardCallbacks {
  goToNextStep(): void;
  goToPreviousStep(): void;
  goToStep(stepIndex: number): void;
  setIsLoading(isLoading: boolean): void;
}

export type WizardState = WizardValues & WizardCallbacks;

export default function useWizardState(): WizardState {
  const [values, setValues] = useState<WizardValues>({
    activeIndex: 0,
    activeName: stepNames[0],
    stepCount: stepNames.length,
    stepNames,
    hasPrevStep: false,
    hasNextStep: true,
    isLoading: false
  });

  const callbacks = useMemo<WizardCallbacks>((): WizardCallbacks => {
    const goToStep = (activeIndex: number) => {
      setValues((prevValues) => ({
        ...prevValues,
        activeIndex,
        activeName: prevValues.stepNames[activeIndex],
        hasPrevStep: activeIndex !== 0,
        hasNextStep: activeIndex !== prevValues.stepCount - 1
      }));
    };

    const goToPreviousStep = () => {
      console.log("Wizard.goToPreviousStep()");
      const prevIndex = Math.max(0, values.activeIndex - 1);
      goToStep(prevIndex);
    };

    const goToNextStep = () => {
      console.log("Wizard.goToNextStep()");
      const nextIndex = Math.min(values.stepCount - 1, values.activeIndex + 1);
      goToStep(nextIndex);
    };

    const setIsLoading = (newIsLoading: boolean) => {
      console.log("Wizard.isLoading = ", newIsLoading);
      setValues((prevValues) => ({
        ...prevValues,
        isLoading: newIsLoading
      }));
    };

    return {
      goToNextStep,
      goToPreviousStep,
      goToStep,
      setIsLoading
    };
  }, [values]);

  return {
    ...values,
    ...callbacks
  };
}
