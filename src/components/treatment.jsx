export default function SuboxoneTreatment() {
    return (
      <div className="bg-gradient-to-br from-green-100 to-teal-100 min-h-screen flex flex-col items-center justify-center p-6">
        <h3 className="text-[#49C7AB] text-[24px]  font-cabinet font-[500] uppercase">Get Same-Day Online</h3>
        <div className="flex justify-between gap-5 items-center">
            <h1 className="text-[52px] text-[#1E293B] md:text-5xl font-[500] font-cabinet ">
            Suboxone Treatment In 10 Minutes
            </h1>
            <button className="mt-6 bg-[#49C7AB] text-white px-6 py-3 font-cabinet rounded-lg shadow-md hover:bg-[#49C7AB]">
            Download The App Today ↗
            </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          <div className="p-4 border border-[#49C7AB] rounded-lg bg-white shadow">
            <h2 className="font-semibold font-cabinet">Step 1 - Download The App</h2>
            <p className="text-gray-600 font-cabinet">Click the link to download our app to get started.</p>
          </div>
          <div className="p-4 border border-[#49C7AB] rounded-lg bg-white shadow">
            <h2 className="font-semibold font-cabinet">Step 2 - Complete Onboarding Process & Documents</h2>
            <p className="text-gray-600 font-cabinet">Provide medical history and sign treatment forms.</p>
          </div>
          <div className="p-4 border border-[#49C7AB] rounded-lg bg-white shadow">
            <h2 className="font-semibold font-cabinet">Step 3 - Schedule Your First Visit</h2>
            <p className="text-gray-600 font-cabinet">
              Our onboarding team will send you a link to book your first meeting. Many times, this is the same day.
            </p>
          </div>
          <div className="p-4 border border-[#49C7AB] rounded-lg bg-white shadow">
            <h2 className="font-semibold font-cabinet">Step 4 - Meet With Licensed Provider</h2>
            <p className="text-gray-600 font-cabinet">At the time of your appointment, open the app on your phone to have your visit.</p>
          </div>
          <div className="p-4 border border-[#49C7AB] rounded-lg bg-white shadow col-span-2 text-center">
            <h2 className="font-semibold font-cabinet">Step 5 - Pick Up Medication</h2>
            <p className="text-gray-600 font-cabinet">Your script will be sent to your pharmacy of choice for pick up the same day.</p>
          </div>
        </div>
      </div>
    );
  }
  