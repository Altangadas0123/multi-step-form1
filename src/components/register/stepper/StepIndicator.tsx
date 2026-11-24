import { Check } from "lucide-react"
import { cn } from "cn"

type Props = { number: number; active: boolean; done: boolean }

export const StepIndicator = ({ number, active, done }: Props) => {
  return (
    <div
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full border text-sm font-semibold",
        active && "border-[#007A55] bg-[#c5a6ff] text-[#261432]",
        done && "border-[#007A55] bg-[#c5a6ff] text-[#261432]",
        !active && !done && "border-[#E2E8F0] text-[#cfc2df]"
      )}
    >
      {done ? <Check className="size-4" /> : number}
    </div>
  )
}
