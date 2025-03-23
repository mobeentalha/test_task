const Section1 = () => {
    return (
        <div className="flex justify-center section-1 px-[15%] py-[2%]">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h2 className="text-[#1E293B] text-[46px]  font-cabinet font-[500]"> Breaking Barriers to Recovery </h2>
                    <p className="text-[#475569] text-[20px]  font-cabinet font-[400]"> 
                        Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities. 
                        We’re deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.
                    </p>
                </div>
                <div>
                    <p className="text-[#475569] text-[20px] font-cabinet font-[400]"> 
                        We’re not just offering a service; we’re creating a lifeline. 
                        Our platform is designed to eliminate the challenges that often stand in the way of recovery—whether it’s stigma, inconvenience, or lack of access to quality care
                    </p>
                    <div className="flex gap-5">
                        <div>
                            <p className="text-[#49C7AB] text-[40px] font-cabinet"> 500+ </p>
                            <p className="text-[#475569] text-[24px] font-cabinet font-[400]"> Patients Treated </p>
                        </div>
                        <div>
                            <p className="text-[#49C7AB] text-[40px] font-cabinet"> 300+ </p>
                            <p className="text-[#475569] text-[24px] font-cabinet font-[400]"> Centers Nationwide </p>
                        </div>
                        <div>
                            <p className="text-[#49C7AB] text-[40px] font-cabinet"> 4.9/5 </p>
                            <p className="text-[#475569] text-[24px] font-cabinet font-[400]"> Patients Satisfaction </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section1