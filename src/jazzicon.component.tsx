import React from 'react';
import MersenneTwister from 'mersenne-twister';
import { Colors } from './colors';
import { Paper } from './paper.component';
import { Shape } from './shape.component';
import { SVG_NS } from './svg.ns';

const DEFAULT_SHAPE_COUNT = 3;

export interface JazziconProps {
  address: string;
  className?: string;
}

function times(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

export function Jazzicon(props: JazziconProps) {
  const seed = parseInt(props.address.toLowerCase().slice(2, 10), 16);
  const generator = new MersenneTwister(seed);
  const colors = new Colors(generator);
  const paperColor = colors.next();

  const renderShapes = () => {
    return times(DEFAULT_SHAPE_COUNT).map(i => {
      return (
        <Shape
          generator={generator}
          total={DEFAULT_SHAPE_COUNT}
          index={i}
          key={`shape-${i}`}
          colors={colors}
        />
      );
    });
  };

  return (
    <Paper color={paperColor} className={props.className}>
      <svg x={0} y={0} xmlns={SVG_NS} viewBox={'0 0 100 100'}>
        {renderShapes()}
      </svg>
    </Paper>
  );
}
