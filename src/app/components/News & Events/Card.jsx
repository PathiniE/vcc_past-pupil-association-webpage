import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

export default function CardComp() {
  return (
    <div className="max-w-7xl mx-auto container grid grid-cols-12 gap-10">
      <div className="col-span-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle>New Student Orientation Scheduled for August</CardTitle>
            <CardDescription>View details about the upcoming orientation for new students</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle>Volunteer Opportunities Available This Spring</CardTitle>
            <CardDescription>Explore various volunteer opportunities for students to get involved</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-12 md:mt-8">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-60 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle>Volunteer Opportunities Available This Spring</CardTitle>
            <CardDescription>Multiple ways to contribute and engage with community services</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-6 md:mt-8">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-40 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle>New Student Orientation Scheduled for August</CardTitle>
            <CardDescription>Important information for incoming students</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="col-span-6 md:mt-8">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            <div className="bg-gray-300 h-40 w-full"></div>
          </CardContent>
          <CardHeader>
            <CardTitle>Volunteer Opportunities Available This Spring</CardTitle>
            <CardDescription>Find ways to get involved in community service</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}