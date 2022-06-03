import "./styles.css";

import { SqspLogo, CloseButton, SitePreview } from "./Components";

import {
  Wizard,
  useWizardState,
  getPrevButtonProps,
  getNextButtonProps,
  getProgressIndicatorProps
} from "./Wizard";
import { useStepState } from "./Steps";
import useActiveStepConfig from "./Steps/useActiveStepConfig";
import { Step } from "./Step";

export default function App() {
  const wizardState = useWizardState();
  const stepState = useStepState();
  const activeStepConfig = useActiveStepConfig(wizardState, stepState);

  const prevButtonProps = getPrevButtonProps(wizardState, activeStepConfig);
  const nextButtonProps = getNextButtonProps(wizardState, activeStepConfig);
  const progressIndicatorProps = getProgressIndicatorProps(
    wizardState,
    stepState
  );

  return (
    <Wizard.Root>
      <Wizard.Header>
        <SqspLogo />
        <CloseButton />
      </Wizard.Header>

      <Wizard.Body>
        <Step.Wrapper>
          <Step.LeftRegion>
            <SitePreview hidden={!!activeStepConfig.previewElement} />
            {activeStepConfig.previewElement}
          </Step.LeftRegion>
          <Step.RightRegion>{activeStepConfig.contentElement}</Step.RightRegion>
        </Step.Wrapper>
      </Wizard.Body>

      <Wizard.Footer>
        <Wizard.PreviousButton {...prevButtonProps}>
          Previous
        </Wizard.PreviousButton>
        <Wizard.ProgressIndicator {...progressIndicatorProps} />
        <Wizard.NextButton {...nextButtonProps}>Next</Wizard.NextButton>
      </Wizard.Footer>
    </Wizard.Root>
  );
}
