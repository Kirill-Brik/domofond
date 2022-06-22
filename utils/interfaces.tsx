import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface ICard extends ILayout {
  readonly key?: string | number;
  readonly className?: string;
}

export interface ILink {
  readonly href: string;
  readonly content: string;
}

export interface IHome {
  readonly address: string;
  readonly contract: string;
  readonly reports: Array<string>;
}

export interface IAdvantageItem {
  readonly icon: string;
  readonly text: string;
}

export interface IItemIcon {
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly reversed?: boolean;
}
