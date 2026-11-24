"use state"

import { Card, CardContent } from "@/components/ui/card";
import { Stepper } from "../stepper/Stepper";
import { useState } from "react";

export const RegisterForm = () => {

  return (
    <Card className="relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6">
        <Stepper />
      </CardContent>
    </Card>
  );
};
