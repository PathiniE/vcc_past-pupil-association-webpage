const COMMITTEE_MEMBERS = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'President',
      description: 'Supporting the president and coordinating various student activities',
      imageUrl: '/assets/bg.jpg'
    },
    {
      id: 2,
      name: 'Alice Johnson',
      role: 'President',
      description: 'Supporting the president and coordinating various student activities',
      imageUrl: '/assets/bg.jpg'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'President',
      description: 'Supporting the president and coordinating various student activities',
      imageUrl: '/assets/bg.jpg'
    },
    {
      id: 4,
      name: 'Alice Johnson',
      role: 'President',
      description: 'Supporting the president and coordinating various student activities',
      imageUrl: '/assets/bg.jpg'
    }
  ];
  
  const CommitteeMemberCard = ({ name, role, description, imageUrl }) => (
    <div className="">
      <div className="">
        <img 
          src={imageUrl} 
          alt={`${name} - ${role}`}
          className="w-full aspect-square object-cover mb-4"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-medium">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
  
  export default function Committee() {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Mobile title section */}
        <div className="block lg:hidden p-8">
          <h1 className="text-2xl text-center font-bold">Executive Committee</h1>
          <p className=" text-gray-600 mt-2 text-center">Leading initiatives to enhance student engagement and representation</p>
        </div>
  
        {/* Main content */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Desktop title section */}
          <div className="hidden lg:block lg:w-[30%] p-8 md:p-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Committee</p>
            <p className="text-gray-600 md:mt-4">Leading initiatives to enhance student engagement and representation</p>
          </div>
  
          {/* Grid section */}
          <div className="w-full lg:w-[70%] p-8 md:p-8 lg:mt-0">
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