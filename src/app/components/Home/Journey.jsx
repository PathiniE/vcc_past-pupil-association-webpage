

export default function Journey() {
  return (
    <div className="flex flex-col h-screen max-w-7xl mt-20 sm:mt-32  pl-8 pr-8 sm:pl-0 sm:pr-0 container mx-auto">
        <div className=" flex flex-col md:flex-row md:h-[30%] lg:h-[20%]">
            <div className="w-full md:w-[30%]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    Our Jounery <span className="block">Through Time</span>
                </h2>
            </div>
            <div className="w-full md:w-[70%]">
                <p className="text-gray-600 mt-4 sm:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            </div>
        </div>
        
        <div 
            className="h-[70%] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-sm mt-4 sm:mt-0"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569173675610-42c361a86e37?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            >
        
        </div>

        
    </div>
  )
}

