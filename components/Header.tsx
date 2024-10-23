import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
export function Header({ title, className }: HeaderProps) {
  return <h1 className={`font-semibold text-xl ${className}`}>{title}</h1>;
}
