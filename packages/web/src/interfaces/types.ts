import React from "react";

export interface Apidata {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug?: {
      current: string;
  }
  image: {
  asset: {
      url: string;
      };
  };
  position?: number;
}

export interface ContextProviderType {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}
export interface ContextProps {
  children: React.ReactNode;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
}