import type { SVGAttributes } from 'react';

export interface Iprops extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  fill?: string;
  width?: string | number;
  height?: string | number;
}
