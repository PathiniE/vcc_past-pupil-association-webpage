import Link from "next/link";

export default function DonationIntro() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 h-auto max-w-7xl mx-auto">
      <p className="text-sm font-medium mb-2 text-primary/80 ">Donations</p>
      
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-1 mt-4">
        Together We Give
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
        Together We Grow
      </h1>
      
      <div className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mb-6 mt-4">
        <p className="text-gray-600">
          Once a Student, Always a Supporter - Your Contribution Helps
          <span className="block">Future Generations Thrive</span>
        </p>
      </div>
      
      <Link href="/reg">
            <button className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors  font-medium">Donate</button>
          </Link>
    </div>
  );
}