import { useState } from "react";

export function useMultistepForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((prev) => {
      if (prev >= steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  }

  function prev() {
    setCurrentStep((prev) => {
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  }

  return { currentStep, step: steps[currentStep], steps, next, prev };
}
