"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stepper } from "../stepper/Stepper"

export const RegisterForm = () => {
  const [step, setStep] = useState(1)

  const next = () => setStep((s) => Math.min(s + 1, 3))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <Card className="relative w-full gap-0 rounded-none border-0 bg-transparent py-0 shadow-none ring-0">
      <CardContent className="px-4 pt-4 pb-4.75 w-full h-138.25 sm:pt-6">
        <Stepper step={step} />

        <div className="mt-6 flex gap-3">
          {step > 1 && <Button variant="outline" onClick={back}>Back</Button>}
          <Button onClick={next}>Continue</Button>
        </div>
      </CardContent>
    </Card>
  )
}