import { Fragment } from "react"
import { Camera, Lock, User } from "lucide-react"
import { StepIndicator } from "./StepIndicator"
import { StepLine } from "./StepLine"

const steps = [
  { label: "Personal info", icon: User },
  { label: "Security", icon: Lock },
  { label: "Profile", icon: Camera },
]

export const Stepper = ({ step }: { step: number }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center">
        {steps.map((s, i) => {
          const n = i + 1
          return (
            <Fragment key={s.label}>
              <StepIndicator number={n} active={step === n} done={step > n} />
              {n < steps.length && <StepLine filled={step > n} />}
            </Fragment>
          )
        })}
      </div>

      <div className="flex justify-between text-sm text-[#FAF5FF]">
        {steps.map((s) => (
          <span key={s.label} className="flex items-center gap-2">
            <s.icon className="size-4" />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  )
}
