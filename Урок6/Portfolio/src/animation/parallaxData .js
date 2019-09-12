export const skills = [
  {
    start: 'self',
    startOffset: 0,
    duration: 500,
    easing: [0.25, 0.1, 0.6, 1.5],
    properties: [
      {
        startValue: 90,
        endValue: 0,
        property: 'rotate',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'scale',
      },
    ],
  },
];
export const experience = [
  {
    start: 'self',
    duration: '50vh',
    properties: [
      {
        startValue: 15,
        endValue: 0,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
  {
    start: 'self',
    startOffset: '60vh',
    duration: '70vh',
    properties: [
      {
        startValue: 0,
        endValue: -10,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];
