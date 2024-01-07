import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from './svg/close.svg';
import menu from './svg/menu.svg';
import up from "./svg/up.svg";

export const icons = {
    up,
    close,
    menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}
