const COMMITTEE_MEMBERS = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'President',
    description: 'Supporting the president and coordinating various student activities',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZSUyMGF2YXRhciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 2,
    name: 'Alice Johnson',
    role: 'President',
    description: 'Supporting the president and coordinating various student activities',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1738590561029-33c9c5d64af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlb3BsZSUyMGF2YXRhciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'President',
    description: 'Supporting the president and coordinating various student activities',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1738989235674-290022372c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZSUyMGF2YXRhciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 4,
    name: 'Alice Johnson',
    role: 'President',
    description: 'Supporting the president and coordinating various student activities',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1738594383544-496c7cb479a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlb3BsZSUyMGF2YXRhciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D'
  }
];

const CommitteeMemberCard = ({ name, role, description, imageUrl }) => (
  <div className="">
    <div className="">
      <img 
        src={imageUrl} 
        alt={`${name} - ${role}`}
        className="w-full aspect-square object-cover mb-4 rounded-md border-gray-200 border-2 transition-all hover:shadow-lg hover:-translate-y-1"
      />
    </div>
    <div className="space-y-1">
      <h3 className="text-lg sm:text-xl text-primary font-semibold">{name}</h3>
      <p className="text-medium sm:text-lg text-gray-600">{role}</p>
      <p className="text-gray-500 lg:block hidden">{description}</p>
    </div>
  </div>
);

export default function Committee() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl pl-8 pr-8 sm:pl-0 sm:pr-0 min-h-screen container mx-auto">
      {/* Mobile title section */}
      <div className="block lg:hidden p-8">
        <h1 className="text-2xl text-center font-bold text-primary">Executive Committee</h1>
        <p className="text-gray-600 mt-2 text-center">Leading initiatives to enhance student engagement and representation</p>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Desktop title section */}
        <div className="hidden lg:block lg:w-[40%]">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Executive Committee</p>
          <p className="text-gray-600 mt-2">Leading initiatives to enhance student engagement and representation</p>
        </div>

        {/* Grid section */}
        <div className="w-full lg:w-[60%] p-8 md:p-8 lg:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
            {COMMITTEE_MEMBERS.map((member) => (
              <CommitteeMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}