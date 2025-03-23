const HeaderComponent = () => {
    return(
        <>
            <div class="relative min-h-screen bg-cover bg-center bg-header">
                <div>
                    <nav class="absolute top-0 left-0 w-[90%] flex justify-between items-center p-6 bg-black/50 text-white">
                        <div class="text-xl font-bold font-cabinet">LOGO</div>
                        <ul class="flex space-x-6">
                            <li><a href="#" class="hover:text-gray-300">Home</a></li>
                            <li><a href="#" class="hover:text-gray-300">About Us</a></li>
                            <li><a href="#" class="hover:text-gray-300">Owners</a></li>
                            <li><a href="#" class="hover:text-gray-300">Tenants</a></li>
                            <li><a href="#" class="hover:text-gray-300">Properties</a></li>
                        </ul>
                        <button class="bg-green-500 text-white px-4 py-2 rounded font-cabinet">Start Treatment</button>
                    </nav>
                </div>
                <div class="absolute inset-0 flex flex-col justify-center text-white  px-6">
                    <p class="text-[#F1F5F9] font-cabinet">No lines. Less hassle. Lower costs.</p>
                    <h1 class="font-cabinet text-4xl md:text-5xl font-bold max-w-2xl">Easy Online Suboxone Treatment for Opioid Addiction</h1>
                    <button class="w-[30%] mt-6 bg-green-500 text-white px-6 py-3 rounded-lg">Download The App Today →</button>
                </div>
            </div>
        </>
    )
}
export default HeaderComponent