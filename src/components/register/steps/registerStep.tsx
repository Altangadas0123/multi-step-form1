import { StepPersonal } from "./StepPersonal"
import { StepSecurity } from "./StepSecurity"
import { StepProfile } from "./StepProfile"
import { StepSuccess } from "./StepSuccess"

type RegisterStepProps = {
  step: any;
};

const stepComponents = [StepPersonal, StepSecurity, StepProfile, StepSuccess]

export const RegisterStep = ({ step }:RegisterStepProps) => {
  if (step === 4) {
    const Success = stepComponents[step - 1];
    return <Success/>
  }

  const ActiveStep = stepComponents[step - 1]
  return (
    <ActiveStep />
  )
}
