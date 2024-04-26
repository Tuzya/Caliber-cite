
// export interface IStyledTypography {
//   size?: number
//   transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
//   color?: string
//   fontWeight?: number
//   textAlign?: 'center' | 'right' | 'left'
//   nowrap?: boolean
// }

import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';

export const styleTypography = style({
    // margin: 0,
    // padding: 0,
    // display: 'flex',
    // height: 'fit-content',
    // fontSize: '13px'

})

// export const StyledTypography = styled.p<IStyledTypography>`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   height: fit-content;
//   white-space: ${({ nowrap }) => nowrap ? 'nowrap' : 'pre-wrap'};
//   word-break: break-word;
//   font-size: ${({ size }) => size || 14}px;
//   color: ${({ color, theme }) => (color ? color : theme.color.black)};
//   text-transform: ${({ transform }) => transform};
//   font-weight: ${({ fontWeight }) => fontWeight || 400};
//   text-align: ${({ textAlign }) => textAlign};
// `
