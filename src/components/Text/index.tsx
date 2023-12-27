import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold17Bluegray70002: "font-poppins font-semibold",
  txtPoppinsSemiBold17Gray90002: "font-poppins font-semibold",
  txtPoppinsRegular12Bluegray400: "font-normal font-poppins",
  txtPoppinsMedium13AmberA700: "font-medium font-poppins",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium12Bluegray200: "font-medium font-poppins",
  txtPoppinsExtraBold30: "font-extrabold font-poppins",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsRegular12Bluegray40001: "font-normal font-poppins",
  txtPoppinsSemiBold13: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium11: "font-medium font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsSemiBold14Bluegray200: "font-poppins font-semibold",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium24RedA2007a: "font-medium font-poppins",
  txtPoppinsMedium13Bluegray200: "font-medium font-poppins",
  txtPoppinsMedium13Bluegray300: "font-medium font-poppins",
  txtPoppinsMedium24DeeppurpleA2007a: "font-medium font-poppins",
  txtPoppinsMedium13Bluegray30001: "font-medium font-poppins",
  txtPoppinsMedium13Black900: "font-medium font-poppins",
  txtPoppinsMedium24Teal200: "font-medium font-poppins",
  txtPoppinsSemiBold14WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium11AmberA700: "font-medium font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
