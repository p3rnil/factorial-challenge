type FrameType = 'full-suspension' | 'diamond' | 'step-through';
type FrameFinishType = 'matte' | 'shiny';
type WheelType = 'road' | 'mountain' | 'fat';
type RimColorType = 'red' | 'black' | 'blue';
type ChainType = 'single-speed' | '8-speed';

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
