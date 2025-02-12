

export default function Journey() {
  return (
    <div className="flex flex-col h-screen p-8 md:p-8 lg:p-12 border-b-2 border-gray-300">
        <div className=" flex flex-col md:flex-row md:h-[40%] gap-6 md:gap-8">
            <div className="w-full md:w-[50%]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Our Jounery <span className="block">Through Time</span>
                </h2>
            </div>
            <div className="w-full md:w-[50%]">
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            </div>
        </div>
        
        <div 
            className="h-[60%] flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat rounded-sm mt-6"
            style={{ backgroundImage: "url('/assets/bg.jpg')" }}
            >
            Background Test
        </div>

        
    </div>
  )
}

