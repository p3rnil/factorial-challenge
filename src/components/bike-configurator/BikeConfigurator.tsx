import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BikeConfigurator() {


  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Customize your bike 🚲</CardTitle>
        <CardDescription>Select each part of your dream bike! Don't worry, all the prices will be calculated on the fly.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>I'm the configurator!</div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="cursor-pointer">Order my bike 🚀</Button>
      </CardFooter>
    </Card>
  );
}
