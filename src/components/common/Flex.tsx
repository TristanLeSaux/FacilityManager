import React from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 
    | 'flex-start' 
    | 'flex-end' 
    | 'center' 
    | 'space-between' 
    | 'space-around' 
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number | string;
  backgroundColor?: string;
  color?: string;
}

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 0,
  backgroundColor,
  color,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap: gap,
        backgroundColor: backgroundColor,
        color: color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
