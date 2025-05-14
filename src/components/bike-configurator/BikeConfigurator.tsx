import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { ConfigSelection, PartOption } from '@/components/bike-configurator/types'
import {
  frameOptions,
  finishOptions,
  wheelOptions,
  rimColorOptions,
  chainOptions,
} from '@/components/bike-configurator/data'

const categories = [
  { key: 'frame', label: 'Frame', options: frameOptions },
  { key: 'finish', label: 'Finish', options: finishOptions },
  { key: 'wheels', label: 'Wheels', options: wheelOptions },
  { key: 'rimColor', label: 'Rim Color', options: rimColorOptions },
  { key: 'chain', label: 'Chain', options: chainOptions },
]

function isOptionAllowed<T>(option: PartOption<T>, selection: ConfigSelection): boolean {
  return option.isAllowed ? option.isAllowed(selection) : true
}

type Props = {
  selection: ConfigSelection
  setSelection: React.Dispatch<React.SetStateAction<ConfigSelection>>
}

export default function BikeConfigurator({ selection, setSelection }: Props) {

  const handleChange = (key: keyof ConfigSelection, value: string) => {
    setSelection((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Customize your bike 🚲</CardTitle>
        <CardDescription>Select each part of your dream bike! Don't worry, all the prices will be calculated on the fly.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          {categories.map(({ key, label, options }) => (
            <div key={key} className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">{label}</Label>
              <Select onValueChange={(e) => handleChange(key as keyof ConfigSelection, e)}>
                <SelectTrigger id="framework" className="w-full cursor-pointer">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {options.filter(opt => isOptionAllowed(opt, selection)).map((opt) => (
                    <SelectItem className="cursor-pointer" key={opt.id} value={opt.id}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="cursor-pointer">Order my bike 🚀</Button>
      </CardFooter>
    </Card>
  )
}
