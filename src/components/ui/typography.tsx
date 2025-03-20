import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva(['text-text-primary'], {
  variants: {
    variant: {
      'text-xs': 'text-[0.625rem] leading-[1rem]',
      'text-sm': 'text-[0.75rem] leading-[1.25rem]',
      'text-md': 'text-[0.875rem] leading-[1.5rem]',
      'text-lg': 'text-[1.125rem] leading-[1.75rem]',
      'text-xl': 'text-[1.25rem] leading-[1.875rem]',

      'display-xs': 'text-[1.5rem] leading-[2rem]',
      'display-sm': 'text-[1.75rem] leading-[2.25rem]',
      'display-md': 'text-[2rem] leading-[2.5rem]',
      'display-lg': 'text-[2.5rem] leading-[3rem]',
      'display-xl': 'text-[3rem] leading-[3.5rem]',
      'display-2xl': 'text-[3.5rem] leading-[4rem]',
    },

    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },

  defaultVariants: {
    variant: 'text-sm',
    weight: 'regular',
  },
});

interface TypographyProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  weight,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot='typography'
      className={cn(typographyVariants({ variant, weight, className }))}
      {...props}
    />
  );
};

export { Typography, typographyVariants };
