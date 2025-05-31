"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export default function MobileShowcase() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Access Your Budget Anywhere, Anytime</h3>
          <p className="text-lg text-gray-600 mb-6">
            The Simple Budget Planner works seamlessly across all your devices. Use it on your desktop, tablet, or
            smartphone - your data syncs automatically when using Google Sheets!
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="mt-1 mr-3 bg-[#22b97d]/20 p-1 rounded-full">
                <Check className="h-5 w-5 text-[#22b97d]" />
              </div>
              <div>
                <p className="font-medium">Track expenses on the go</p>
                <p className="text-gray-600 text-sm">
                  Log your spending right when it happens - no more forgetting where your money went
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 bg-[#22b97d]/20 p-1 rounded-full">
                <Check className="h-5 w-5 text-[#22b97d]" />
              </div>
              <div>
                <p className="font-medium">Check your budget anytime</p>
                <p className="text-gray-600 text-sm">
                  Make informed spending decisions by always knowing where you stand financially
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 bg-[#22b97d]/20 p-1 rounded-full">
                <Check className="h-5 w-5 text-[#22b97d]" />
              </div>
              <div>
                <p className="font-medium">Works with Google Sheets app</p>
                <p className="text-gray-600 text-sm">
                  Free app available for iOS and Android - no additional software needed
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 bg-[#22b97d]/20 p-1 rounded-full">
                <Check className="h-5 w-5 text-[#22b97d]" />
              </div>
              <div>
                <p className="font-medium">Automatic cloud backup</p>
                <p className="text-gray-600 text-sm">
                  Never worry about losing your financial data - it's safely stored in the cloud
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-[#22b97d]/5 p-8 rounded-xl border border-[#22b97d]/20">
          <h4 className="text-xl font-bold mb-4 text-center text-[#22b97d]">Mobile-Friendly Design</h4>
          <p className="text-center mb-4">
            Our budget planner is designed to work perfectly on all your devices, giving you the freedom to manage your
            finances wherever you are.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/budget-mobile.png"
              alt="Budget Planner on Mobile"
              width={300}
              height={600}
              className="rounded-xl shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
