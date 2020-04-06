import React, { CSSProperties } from 'react';
import Color from 'color';

export interface PaperProps {
  color: Color;
  className?: string;
  style?: CSSProperties;
}

export function Paper(props: React.PropsWithChildren<PaperProps>) {
  const baseStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    display: 'inline-block',
    backgroundColor: props.color.hex(),
  };

  const style = Object.assign({}, baseStyle, props.style);

  return (
    <div style={style} className={props.className}>
      {props.children}
    </div>
  );
}
