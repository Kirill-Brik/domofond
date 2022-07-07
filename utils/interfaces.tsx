import { ReactNode } from "react";
import { Url } from "url";

export interface ILayout {
  children: ReactNode;
}

export interface ICard extends ILayout {
  readonly className?: string;
}

export interface ILink {
  readonly url: Url | string;
  readonly text: string;
  readonly textSyze?: "small" | "medium";
  readonly icon?: string;
  readonly className?: string;
}

export interface IInput {
  readonly placeholder: string;
  readonly name: string;
}

export interface IInputText extends IInput {
  readonly icon: string;
}

export interface IButtonIcon {
  readonly type: "button" | "link";
  readonly icon: string;
  readonly url?: Url | string;
  readonly className?: string;
}

export interface IItemNamed {
  readonly icon?: string;
  readonly name: string;
  readonly text: string;
  readonly reversed?: boolean;
}

export interface IHome {
  address: string;
  contract: string;
  reports: Array<{
    name: string;
    link: string;
  }>;
  readonly className?: string;
}

export interface IAdvantageItem {
  readonly icon: string;
  readonly text: string;
}
