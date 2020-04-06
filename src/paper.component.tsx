import React from 'react';
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
}

export function Paper(props: React.PropsWithChildren<PaperProps>) {
  const style = Object.assign({}, BASE_STYLES, {
    backgroundColor: props.color.hex(),
  });

  return (
    <div className={props.className}>
      <div style={style}>{props.children}</div>
    </div>
  );
}
