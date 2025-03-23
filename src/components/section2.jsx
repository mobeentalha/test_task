import PlayIcon from '../assets/images/play.png'
const Section2 = () => {
    return (
        <div className="flex justify-center px-[15%] py-[2%]">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <p className="text-[#49C7AB] text-[24px] font-cabinet font-[500]"> 
                        Welcome To Recovery Delivered
                    </p>
                    <h2 className="text-[#1E293B] text-[52px] font-cabinet font-[500] leading-[120%] tracking-[0%]"> 
                        Your Fully Online Suboxone Treatment Platform
                    </h2>
                    <p className="text-[#475569] text-[20px] font-cabinet font-[400]"> 
                        100% online opioid treatment with licensed buprenorphine providers starts at just $99/month.
                    </p>
                    <p className="text-[#475569] text-[20px] font-cabinet font-[400] pt-4"> 
                    With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script.
                    </p>
                </div>
                <div className='flex justify-center items-center section-2'>
                    <img src={PlayIcon} alt='icon'  />
                </div>
            </div>
        </div>
    )
}
export default Section2