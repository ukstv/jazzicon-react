import React, { CSSProperties } from 'react';
import Color from 'color';

export const BASE_STYLES = {
  borderRadius: '50%',
  overflow: 'hidden',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  display: 'inline-block',
};

export interface PaperProps {
  color: Color;
  className?: string;
  style?: CSSProperties;
}

export function Paper(props: React.PropsWithChildren<PaperProps>) {
  const style = Object.assign(
    {},
    props.className ? {} : BASE_STYLES,
    { backgroundColor: props.color.hex() },
    props.style
  );

  return (
    <div style={style} className={props.className}>
      {props.children}
    </div>
  );
}
