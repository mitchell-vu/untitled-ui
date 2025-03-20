import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Typography } from './typography';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none cursor-pointer',
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-background-brand-solid text-text-white shadow-xs hover:bg-background-brand-solid-hover',
      },

      size: {
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        md: 'h-9 px-4 py-2 has-[>svg]:px-3',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        // border: '2px solid',
        // borderImageSource:
        //   'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
        // boxShadow:
        // border:
        //   '2px solid linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%)',
        boxShadow:
          '0px 1px 2px 0px #1018280D, 0px -2px 0px 0px #1018280D inset, 0px 0px 0px 1px #1018282E inset, 0px 1px 0px 1px rgba(255, 255, 255, 0.12) inset',
      }}
      {...props}
    >
      {typeof children === 'string' || typeof children === 'number' ? (
        <Typography variant='text-md' weight='semibold' className='text-inherit'>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Comp>
  );
};

export { Button, buttonVariants };
