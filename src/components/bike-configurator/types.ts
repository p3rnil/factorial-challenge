export type FrameType = 'full-suspension' | 'diamond' | 'step-through';
export type FrameFinishType = 'matte' | 'shiny';
export type WheelType = 'road' | 'mountain' | 'fat';
export type RimColorType = 'red' | 'black' | 'blue';
export type ChainType = 'single-speed' | '8-speed';

export type ConfigSelection = {
  frame?: FrameType;
  finish?: FrameFinishType;
  wheels?: WheelType;
  rimColor?: RimColorType;
  chain?: ChainType;
};

export type PartOption<T> = {
  id: T;
  label: string;
  getPrice: (selection: ConfigSelection) => number;
  isAllowed?: (selection: ConfigSelection) => boolean;
};
