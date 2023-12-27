import React from "react";

const shapes = { round: "rounded" } as const;
const variants = {
  fill: {
    teal_50: "bg-teal-50 text-teal-500",
    white_A700_65: "bg-white-A700_65 text-white-A700",
    orange_50: "bg-orange-50",
    blue_50: "bg-blue-50",
    deep_purple_50: "bg-deep_purple-50 text-deep_purple-A200",
    cyan_50: "bg-cyan-50 text-cyan-400",
    pink_50: "bg-pink-50 text-red-A200",
    blue_gray_700_02: "bg-blue_gray-700_02 text-white-A700",
    gray_100: "bg-gray-100 text-blue-300",
  },
} as const;
const sizes = { xs: "p-1", sm: "p-2", md: "p-[11px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
