import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const Person = (props: ISvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M12 12c-1.1 0-2.042-.392-2.825-1.175C8.392 10.042 8 9.1 8 8s.392-2.042 1.175-2.825C9.958 4.392 10.9 4 12 4s2.042.392 2.825 1.175C15.608 5.958 16 6.9 16 8s-.392 2.042-1.175 2.825C14.042 11.608 13.1 12 12 12zm-8 8v-2.8c0-.567.146-1.087.438-1.563.291-.475.679-.837 1.162-1.087a14.843 14.843 0 013.15-1.163A13.76 13.76 0 0112 13c1.1 0 2.183.13 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.163 1.087.291.476.437.996.437 1.563V20H4zm2-2h12v-.8a.973.973 0 00-.5-.85c-.9-.45-1.808-.787-2.725-1.012a11.6 11.6 0 00-5.55 0c-.917.225-1.825.562-2.725 1.012a.973.973 0 00-.5.85v.8zm6-8c.55 0 1.02-.196 1.412-.588C13.804 9.021 14 8.55 14 8c0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0012 6c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0010 8c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588z"
        fill={props.color || '#000'}
      />
    </G>
  </Svg>
);
const Memo = memo(Person);
export default Memo;
