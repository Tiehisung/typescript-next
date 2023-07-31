"use client";

import { customButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
  isDisabled,
  textStyles,
  rightIcon,
}: customButtonProps) => {
  return (
    <button
      disabled={isDisabled||false}
      type={btnType || "button"}
      className={` ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right icon"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
