import { useMemo } from 'react'
import { Card } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import {
  frameOptions,
  finishOptions,
  wheelOptions,
  rimColorOptions,
  chainOptions,
} from '@/components/bike-configurator/data'
import type { ConfigSelection, PartOption } from '@/components/bike-configurator/types'

function getSelectionDetails(
  selection: ConfigSelection,
  options: Record<string, PartOption<unknown>[]>
): { label: string; price: number }[] {
  const details: { label: string; price: number }[] = [];

  for (const [key, opts] of Object.entries(options)) {
    const selectedId = selection[key as keyof ConfigSelection];
    const found = opts.find((opt) => opt.id === selectedId);

    if (found) {
      details.push({
        label: found.label,
        price: found.getPrice(selection),
      });
    }
  }

  return details;
}

function calculateTotalPrice(
  selection: ConfigSelection,
  options: Record<string, PartOption<unknown>[]>
): number {
  let total = 0

  for (const [key, opts] of Object.entries(options)) {
    const selectedId = selection[key as keyof ConfigSelection]
    const found = opts.find((opt) => opt.id === selectedId)
    if (found) {
      total += found.getPrice(selection)
    }
  }

  return total
}

type Props = {
  selection: ConfigSelection
}

export default function Ticket({ selection }: Props) {
  const total = useMemo(() =>
    calculateTotalPrice(selection, {
      frame: frameOptions,
      finish: finishOptions,
      wheels: wheelOptions,
      rimColor: rimColorOptions,
      chain: chainOptions,
    }), [selection])


  const details = useMemo(() =>
    getSelectionDetails(selection, {
      frame: frameOptions,
      finish: finishOptions,
      wheels: wheelOptions,
      rimColor: rimColorOptions,
      chain: chainOptions,
    }), [selection])

  return (
    <Card className="w-[300px] font-mono p-4">
      <div className="text-center">
        <h1 className="text-xl font-bold">MARKUS BIKE SHOP</h1>
        <p className="text-sm text-gray-600">Av. Central 123, Ciudad</p>
        <p className="text-sm text-gray-600">Tel: (123) 456-7890</p>
      </div>
      <Separator />
      <div className="text-sm">
        <p><span className="font-semibold">Date:</span>{new Date().toLocaleDateString()}</p>
        <p><span className="font-semibold">Ticket #:</span> 001234</p>
        <p><span className="font-semibold">Client:</span> Nicolás</p>
      </div>
      <Separator />
      <div className="text-sm min-h-32">
        <h2 className="font-bold mb-2">Items</h2>
        {details.map((item, index) =>
          <div key={index} className="flex justify-between items-start">
            <span className="align-top">{item.label}</span>
            <span className="align-top text-right">${item.price}</span>
          </div>)}
      </div>
      <Separator />
      <div className="pt-2 text-sm">
        <p className="flex justify-between"><span>Subtotal:</span><span>${total}</span></p>
        <p className="flex justify-between"><span>TAX (10%):</span><span>${total * 0.1}</span></p>
        <p className="flex justify-between font-bold text-lg"><span>Total:</span><span>${total + (total * 0.1)}</span></p>
      </div>
      <div className="text-center mt-6 text-xs text-gray-500">
        <p>Thank you for your purchase 🙌</p>
        <p>markusbike.shop</p>
      </div>
    </Card>
  )
}
