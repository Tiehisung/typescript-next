

//
import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  btnType?: "submit" | "button";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface IcarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: IcarProps;
}

export interface ISearchfilters {
  model: string;
  manufacturer: string;
  fuel_type: string;
  year: number;
}
