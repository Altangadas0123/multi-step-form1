import { cn } from "cn"

export const StepLine = ({ filled }: { filled: boolean }) => {
  return (
    <div
      className={cn(
        "h-0.5 flex-1 transition-colors",
        filled ? "bg-[#BE94FD]" : "bg-[#34253F]"
      )}
    />
  )
}

