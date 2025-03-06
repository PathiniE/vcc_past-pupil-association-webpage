import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

export default function CardComp() {
  return (
    <div className="max-w-7xl mx-auto container grid grid-cols-1 sm:grid-cols-12 gap-10 pl-8 pr-8 md:pl-0 md:pr-0">
      <div className="col-span-1 sm:col-span-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">New Student Orientation Scheduled for August</CardTitle>
            <CardDescription className="text-gray-600">Join us for an exciting orientation to kick off the semester !</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-1 sm:col-span-6 mt-6 sm:mt-0">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Volunteer Opportunities Available This Spring</CardTitle>
            <CardDescription className="text-gray-600">Make a difference by volunteering in our community events this spring !</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-1 sm:col-span-12 sm:mt-8 mt-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Volunteer Opportunities Available This Spring</CardTitle>
            <CardDescription className="text-gray-600">Make a difference by volunteering in our community events this spring !</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-1 sm:col-span-6 sm:mt-8 mt-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">New Student Orientation Scheduled for August</CardTitle>
            <CardDescription className="text-gray-600">Join us for an exciting orientation to kick off the semester !</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-1 sm:col-span-6 sm:mt-8 mt-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Volunteer Opportunities Available This Spring</CardTitle>
            <CardDescription className="text-gray-600">Make a difference by volunteering in our community events this spring !</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}