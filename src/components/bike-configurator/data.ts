import type { PartOption } from './types';

export const frameOptions: PartOption<'full-suspension' | 'diamond' | 'step-through'>[] = [
  { id: 'full-suspension', label: 'Full-suspension', getPrice: () => 130 },
  { id: 'diamond', label: 'Diamond', getPrice: () => 100 },
  { id: 'step-through', label: 'Step-through', getPrice: () => 90 },
];

export const finishOptions: PartOption<'matte' | 'shiny'>[] = [
  {
    id: 'matte',
    label: 'Matte',
    getPrice: (selection) => selection.frame === 'full-suspension' ? 30 : 50,
  },
  {
    id: 'shiny',
    label: 'Shiny',
    getPrice: () => 30,
  },
];

export const wheelOptions: PartOption<'road' | 'mountain' | 'fat'>[] = [
  {
    id: 'road',
    label: 'Road wheels',
    getPrice: () => 80,
  },
  {
    id: 'mountain',
    label: 'Mountain wheels',
    getPrice: () => 100,
    isAllowed: (selection) => selection.frame === 'full-suspension',
  },
  {
    id: 'fat',
    label: 'Fat bike wheels',
    getPrice: () => 120,
  },
];

export const rimColorOptions: PartOption<'red' | 'black' | 'blue'>[] = [
  {
    id: 'red',
    label: 'Red',
    getPrice: () => 20,
    isAllowed: (selection) => selection.wheels !== 'fat',
  },
  { id: 'black', label: 'Black', getPrice: () => 15 },
  { id: 'blue', label: 'Blue', getPrice: () => 20 },
];

export const chainOptions: PartOption<'single-speed' | '8-speed'>[] = [
  { id: 'single-speed', label: 'Single-speed', getPrice: () => 43 },
  { id: '8-speed', label: '8-speed', getPrice: () => 60 },
];
