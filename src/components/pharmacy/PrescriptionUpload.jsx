import { Button } from "@/components/ui/button"
import { CustomButton } from "../custom/CustomButton"

export function PrescriptionUpload({ onUpload }) {
  return (
    <div className="flex flex-col gap-4">
     <div className="bg-[#F0D869] lg:h-[460px] w-[550px] h-80 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 text-sky  text-left max-w-xs">
              <h3 className="text-2xl md:text-3xl font-normal leading-8 mb-4">Order via prescription</h3>
              <p className="mb-8 text-xl leading-5">
                Upload prescription to place an order or start a consultation
              </p>
              <CustomButton  
              className="w-full md:w-auto text-white shrink md:px-16 py-3 rounded-md font-semibold transition"
              >
                Upload
              </CustomButton>
            </div>
            {/* Placeholder for rider image */}
            <div className="absolute -bottom-10 -right-5 md:right-4 w-64 h-64 rounded-full">
                <img src="/bike.png" alt="bike rider" className="w-full h-full object-cover" />
            </div>
          </div> 
    </div>
  )
}

{/* Left Card - Purple Rider Program */}
          <div className="bg-[#BD8CBF] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 text-sky  text-left max-w-xs">
              <h3 className="text-2xl md:text-3xl font-normal leading-8 mb-4">Start making money as a Medicyer rider.</h3>
              <p className="mb-8 text-lg leading-5">
                We provide a range of comprehensive medical services to meet your healthcare needs
              </p>
              <Button 
              variant="soft" 
              className="w-full md:w-auto  text-white shrink md:px-12 py-3 rounded-md font-semibold transition"
              >
                Register
              </Button>
            </div>
            {/* Placeholder for rider image */}
            <div className="absolute -bottom-10 -right-5 md:right-4 w-48 h-48 rounded-full">
                <img src="/bike.png" alt="bike rider" className="w-full h-full object-cover" />
            </div>
          </div>
