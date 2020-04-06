import React from 'react';
import MersenneTwister from 'mersenne-twister';
import { Colors } from './colors';
import { SVG_NS } from './svg.ns';

export function Shape(props: {
  generator: MersenneTwister;
  total: number;
  index: number;
  colors: Colors;
}) {
  const diameter = 100;
  const firstRot = props.generator.random();
  const angle = Math.PI * 2 * firstRot;
  const velocity =
    (diameter / props.total) * props.generator.random() +
    (props.index * diameter) / props.total;

  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity;

  const translate = 'translate(' + tx.toFixed(3) + ' ' + ty.toFixed(3) + ')';

  const secondRot = props.generator.random();
  const rot = firstRot * 360 + secondRot * 180;
  const center = diameter / 2;
  const rotate = 'rotate(' + rot.toFixed(1) + ' ' + center + ' ' + center + ')';
  const transform = translate + ' ' + rotate;
  const fill = props.colors.next();

  return (
    <rect
      xmlns={SVG_NS}
      x={0}
      y={0}
      width={'100%'}
      height={'100%'}
      transform={transform}
      fill={fill.hex()}
    />
  );
}
