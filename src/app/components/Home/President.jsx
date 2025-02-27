


import Image from "next/image"

export default function President() {
  return (
    <div className="flex flex-col max-w-7xl pl-8 pr-8 md:pl-0 md:pr-0 container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 text-primary">President's Statement</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto px-2 md:px-6 text-center leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        </p>
      </div>
      <div className="h-24 md:h-32 flex items-center justify-center p-4">
        <Image
          src="/assets/signature.png"
          alt="Signature"
          height={150}
          width={200}
          className="h-auto w-auto max-h-full"
        />
      </div>
    </div>
  );
}