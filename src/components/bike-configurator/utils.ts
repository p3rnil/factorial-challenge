import type { ConfigSelection, PartOption } from './types'

export function isOptionAllowed<T>(option: PartOption<T>, selection: ConfigSelection): boolean {
  return option.isAllowed ? option.isAllowed(selection) : true
}

export function calculateTotalPrice(
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

export function getSelectionDetails(
  selection: ConfigSelection,
  options: Record<string, PartOption<unknown>[]>
): { label: string; price: number }[] {
  const details: { label: string; price: number }[] = []

  for (const [key, opts] of Object.entries(options)) {
    const selectedId = selection[key as keyof ConfigSelection]
    const found = opts.find((opt) => opt.id === selectedId)

    if (found) {
      details.push({
        label: found.label,
        price: found.getPrice(selection),
      })
    }
  }

  return details
}
