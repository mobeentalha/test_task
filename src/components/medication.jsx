import React from "react";

const MedicationBanner = () => {
  return (
    <div className="flex items-center justify-center h-[502px] bg-gradient-to-r from-[#49C7AB] via-[#49C7AB] to-[#FFFFFF] animate-pulse">
      <div className="text-center max-w-2xl p-6 rounded-lg">
        <p className="text-[20px] font-[400] font-cabinet">
          We have partnered with <span className="font-semibold">RX-Outreach</span> to provide mail order medications
          at a fraction of the price you may find in your local pharmacy. Meet your chronic illness provider online
          today and get your medication delivered as quickly as 24 hours later.
        </p>
        <a
          href="#"
          className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Get The App ↗
        </a>
      </div>
    </div>
  );
};

export default MedicationBanner;