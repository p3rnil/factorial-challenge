# Markus Bike Shop Configurator

This project is a bike configurator application built with **React**, **TypeScript**, and **Vite**. It allows users to customize their dream bike by selecting various parts and options, and it calculates the total price dynamically. The app also generates a ticket summarizing the selected configuration and pricing.

## Key points

- Flexible configuration logic
- Dynamic pricing based on selected parts
- Compatibility rules between components

## Proposed Solution

The proposed solution is a simulation of polymorphism in an object-oriented programming style. In this case, I chose a more functional approach, since React is functional by nature, as you can see in the types.ts file.
What enables this flexibility is the PartOption type, where we have two functions that let us dynamically define the price based on other selected parts and handle compatibility between them.

In data.ts, we have our "schema" where we define the parts, their prices, and their compatibility rules. One important point here is that as we add more compatibility rules or price variations, this can lead to confusion and a loss of control.

## Features

- **Bike Configurator**: Customize your bike by selecting frames, finishes, wheels, rim colors, and chains.
- **Dynamic Pricing**: Prices are calculated in real-time based on the selected options.
- **Animated Numbers**: Smooth animations for price updates using GSAP.


## Technologies Used

- **React**: UI library for building components.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **GSAP**: Animation library for smooth transitions.

## Key Components
- **BikeConfigurator**: Allows users to select bike parts and ensures only valid combinations are selectable.
- **Ticket**: Displays a summary of the selected configuration, including an animated total price.
- **AnimatedNumber**: Smoothly animates numerical values using GSAP.

## Configuration Options
The bike configurator supports the following options:

- Frame: Full-suspension, Diamond, Step-through
- Finish: Matte, Shiny
- Wheels: Road, Mountain, Fat
- Rim Color: Red, Black, Blue
- Chain: Single-speed, 8-speed

## Customization
You can modify the bike parts in data.ts. You can easely modify, add or remove parts. This structure is defined in **types** (/bike-confugurator/types.ts). The key parts here are **getPrice** and **isAllowed**, which allow you to define the price for each part and the restrictions with other parts.
This system is flexible and provides an easy way to maintain and extend new rules within the bike build process.

Here is an example where you define the rules for pricing and compatibility with other parts. In this case, it's with **selection.frame**, but you can easily do it with others as well.

```js
{
  id: 'road',
  label: 'Road wheels',
  getPrice: (selection) => selection.frame === 'full-suspension' ? 305.99 : 1650.05,
},
{
  id: 'mountain',
  label: 'Mountain wheels',
  getPrice: () => 1000,
  isAllowed: (selection) => selection.frame === 'full-suspension',
},
```

## Types.ts where the magic happens

This file contains the core principle of the whole configurator. Here we define the types. First in a more atomic way we have:

```js
type FrameType = 'full-suspension' | 'diamond' | 'step-through';
type FrameFinishType = 'matte' | 'shiny';
type WheelType = 'road' | 'mountain' | 'fat';
type RimColorType = 'red' | 'black' | 'blue';
type ChainType = 'single-speed' | '8-speed';
```

Based on these types, we have the **ConfigSelection**, which stores the selection made by the user and provides the specific parts. If the user hasn't selected a part, it will be undefined.

```js
export type ConfigSelection = {
  frame?: FrameType;
  finish?: FrameFinishType;
  wheels?: WheelType;
  rimColor?: RimColorType;
  chain?: ChainType;
};
```

We have the basics covered. Now, the final touch in this approach is the PartOption type. This type allows you to write custom logic inside each **getPrice** and **isAllowed** function (used for compatibility with other parts).

```js
export type PartOption<T> = {
  id: T;
  label: string;
  getPrice: (selection: ConfigSelection) => number;
  isAllowed?: (selection: ConfigSelection) => boolean;
};
```

## Improvements

- Guide the user better with the bike configurator, as currently there's nothing explaining why the price changes. That can be confusing.
- Currently, if there's an incompatibility with a part, the bike configurator simply doesn't show it. To be more transparent and user-friendly, it's better to disable the option rather than hide it.
- data.ts acts like our schema, but it doesn't enforce consistency. isAllowed can be potentially problematic, as we might lose track of contradictions. Consider adding a validation check for those cases.