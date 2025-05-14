import type { PartOption, FrameType, FrameFinishType, WheelType, RimColorType, ChainType } from './types';

export const frameOptions: PartOption<FrameType>[] = [
  { id: 'full-suspension', label: 'Full-suspension', getPrice: () => 1300 },
  { id: 'diamond', label: 'Diamond', getPrice: () => 1000 },
  { id: 'step-through', label: 'Step-through', getPrice: () => 900 },
];

export const finishOptions: PartOption<FrameFinishType>[] = [
  {
    id: 'matte',
    label: 'Matte',
    getPrice: (selection) => selection.frame === 'full-suspension' ? 305.99 : 1650.05,
  },
  {
    id: 'shiny',
    label: 'Shiny',
    getPrice: () => 300,
  },
];

export const wheelOptions: PartOption<WheelType>[] = [
  {
    id: 'road',
    label: 'Road wheels',
    getPrice: () => 80,
  },
  {
    id: 'mountain',
    label: 'Mountain wheels',
    getPrice: () => 1000,
    isAllowed: (selection) => selection.frame === 'full-suspension',
  },
  {
    id: 'fat',
    label: 'Fat bike wheels',
    getPrice: () => 1200,
  },
];

export const rimColorOptions: PartOption<RimColorType>[] = [
  {
    id: 'red',
    label: 'Red',
    getPrice: () => 450,
    isAllowed: (selection) => selection.wheels !== 'fat',
  },
  { id: 'black', label: 'Black', getPrice: () => 150 },
  { id: 'blue', label: 'Blue', getPrice: () => 650 },
];

export const chainOptions: PartOption<ChainType>[] = [
  { id: 'single-speed', label: 'Single-speed', getPrice: () => 430 },
  { id: '8-speed', label: '8-speed', getPrice: () => 600 },
];
