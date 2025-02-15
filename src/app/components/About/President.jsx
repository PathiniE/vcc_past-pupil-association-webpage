import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl min-h-[450px] mt-10 md:mt-20 px-8 sm:px-0 container mx-auto">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <p className="text-sm font-medium mb-2 text-primary/80">President's Statement</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 mt-4">
          Leadership in Action:
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
          Insights from Our President
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
          leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
          leo
        </p>
        <div className="mt-6">
          <Image 
            src="/assets/signature.png" 
            alt="President's signature" 
            width={150} 
            height={60}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[300px] md:h-auto relative rounded-md">
        <Image
          src="/assets/president.jpg"
          alt="Our President"
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}