import { ReactNode } from "react";
import { Url } from "url";

export interface ILayout {
  children: ReactNode;
}

export interface ICard extends ILayout {
  readonly key?: string | number;
  readonly className?: string;
}

export interface ILink {
  readonly url: Url | string;
  readonly content: string;
}

export interface IButtonIcon {
  readonly type: "button" | "link";
  readonly icon: string;
  readonly url?: Url | string;
}

export interface IItemIcon {
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly reversed?: boolean;
}

export interface IHome {
  readonly address: string;
  readonly contract: Url | string;
  readonly reports: Array<Url | string>;
}

export interface IAdvantageItem {
  readonly icon: string;
  readonly text: string;
}
