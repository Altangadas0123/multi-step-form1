"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stepper } from "../stepper/Stepper"
import { LockKeyholeIcon } from "lucide-react"
import { RegisterStep } from "../steps/registerStep"


export const RegisterForm = () => {
  const [step, setStep] = useState(1)

  const next = () => setStep((s) => Math.min(s + 1, 4))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <Card className="relative w-full gap-0 rounded-none border-0 bg-transparent py-0 shadow-none ring-0">
      <CardContent className="px-4 pt-4 pb-4.75 w-full h-138.25 sm:pt-6">
        <Stepper step={step} />

        <p className="w-fit h-3.75 mg-5.5 mb-1.75 font-bold text-xs text-[#FAF5FF]">STEP 1 OF 3</p>

        <h1 className="w-fit h-9 font-bold text-3xl text-[#F4EDFF] mb-1.25">Let’s start with you.</h1>

        <p className="w-81.5 h-3.75 text-xs text-[#FAF5FF] mb-5.75">A few details to make this space your own.</p>

        <RegisterStep step={step} />

        <div className="mt-7.5 mb-3.5 flex gap-3">
          {step > 1 && <Button className="w-21.25 h-11 rounded-lg border border-[#90A1B9] bg-[#34253F] " variant="outline" onClick={back}>Back</Button>}
          <Button className="w-full flex flex-1 h-11 rounded-lg bg-[#BE94FD]" onClick={next}>Continue</Button>
        </div>
        
        <div className="flex justify-center items-center w-full h-fit gap-1.5"> 
          <LockKeyholeIcon className="w-2.75 h-2.75"/> 
          <p className="w-fit h-3 text-[10px] text-[#FAF5FF]">Progress is saved when you click Continue.</p>
        </div>
      </CardContent>
    </Card>
  )
}