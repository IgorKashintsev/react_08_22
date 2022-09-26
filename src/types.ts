import { Key } from "react";

export interface Message {
  author: string;
  text: string;
};

export type Messages = Record<string, Message[]>;

export interface Chat {
  id: Key;
  name: String;
};