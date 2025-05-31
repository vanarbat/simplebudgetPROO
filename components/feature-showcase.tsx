"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, DollarSign, Target, Shield, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeatureShowcase() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Build Your Personal Financial Dashboard",
      description: "Set up your customized budget dashboard in less than 10 minutes",
      image: "/images/budget-dashboard-december.png",
      benefits: [
        "All your income, expenses, savings, and goals in ONE simple view",
        "Automatic calculations — no manual math needed",
        "Your financial control center — see everything at a glance!",
        "Start gaining control of your finances immediately",
      ],
      icon: <DollarSign className="h-6 w-6 text-[#22b97d]" />,
      emoji: "🖥️",
    },
    {
      id: 2,
      title: "Track Your Expenses with Ease",
      description: "Log daily spending effortlessly",
      image: "/images/expense-tracker.png",
      benefits: [
        "Automatic categorization of expenses",
        "Visual breakdowns to spot leaks and boost savings",
        "Stay on top of your money every single day",
        "Identify where your money is going",
      ],
      icon: <Target className="h-6 w-6 text-[#22b97d]" />,
      emoji: "🧾",
    },
    {
      id: 3,
      title: "Achieve Your Financial Goals",
      description: "Set clear goals and watch your progress in real-time",
      image: "/images/bonus-goal-tracker.png",
      benefits: [
        "Track multiple financial goals simultaneously",
        "Visual progress bars keep you motivated",
        "Celebrate milestones along your journey",
        "Stay committed to your financial success",
      ],
      icon: <Shield className="h-6 w-6 text-[#22b97d]" />,
      emoji: "🎯",
    },
  ]

  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1))
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev === 1 ? steps.length : prev - 1))
  }

  const currentStep = steps.find((step) => step.id === activeStep) || steps[0]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Step Indicators */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setActiveStep(step.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step.id === activeStep
                    ? "bg-[#22b97d] text-white scale-110"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {step.id}
              </button>
              {step.id !== steps.length && (
                <div
                  className={`w-16 h-1 mx-1 ${step.id < activeStep ? "bg-[#22b97d]" : "bg-gray-200"} transition-all`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Feature Content with Hook Design */}
      <div className="relative bg-gradient-to-br from-[#22b97d]/5 to-white p-8 rounded-2xl border border-[#22b97d]/20 shadow-lg mb-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#22b97d]/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#22b97d]/10 rounded-full blur-xl -z-10"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#22b97d]/10 text-[#22b97d] font-medium text-sm mb-4">
              {currentStep.icon}
              <span className="ml-2">{`Step ${currentStep.id} of ${steps.length}`}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center">
              <span className="text-3xl mr-2">{currentStep.emoji}</span> {currentStep.title}
            </h3>
            <p className="text-gray-700 mb-6 text-lg">{currentStep.description}</p>

            <ul className="space-y-3 mb-6">
              {currentStep.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              <Button
                onClick={prevStep}
                variant="outline"
                className="border-[#22b97d] text-[#22b97d] hover:bg-[#22b97d]/10"
              >
                Previous Step
              </Button>
              <Button onClick={nextStep} className="bg-[#22b97d] hover:bg-[#1ea06c] text-white">
                Next Step <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22b97d]/20 to-transparent rounded-lg blur-xl"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-xl border border-[#22b97d]/20 transform hover:scale-105 transition-all duration-300">
                <Image
                  src={currentStep.image || "/placeholder.svg"}
                  alt={currentStep.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />

                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#22b97d] rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#22b97d] rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#22b97d] rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#22b97d] rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#22b97d]/10 transform hover:translate-y-[-10px] transition-all duration-300">
          <div className="bg-[#22b97d]/10 p-3 rounded-full inline-block mb-4">
            <DollarSign className="h-6 w-6 text-[#22b97d]" />
          </div>
          <h3 className="text-xl font-bold mb-2">Save More Money</h3>
          <p className="text-gray-600">
            Our users save an average of $350 per month just by identifying and eliminating unnecessary expenses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-[#22b97d]/10 transform hover:translate-y-[-10px] transition-all duration-300">
          <div className="bg-[#22b97d]/10 p-3 rounded-full inline-block mb-4">
            <Target className="h-6 w-6 text-[#22b97d]" />
          </div>
          <h3 className="text-xl font-bold mb-2">Achieve Your Goals</h3>
          <p className="text-gray-600">
            Whether it's paying off debt, saving for a home, or building wealth, our system helps you get there faster.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-[#22b97d]/10 transform hover:translate-y-[-10px] transition-all duration-300">
          <div className="bg-[#22b97d]/10 p-3 rounded-full inline-block mb-4">
            <Award className="h-6 w-6 text-[#22b97d]" />
          </div>
          <h3 className="text-xl font-bold mb-2">Financial Freedom</h3>
          <p className="text-gray-600">
            Experience the peace of mind that comes from having control over your money and a clear path forward.
          </p>
        </div>
      </div>
    </div>
  )
}
