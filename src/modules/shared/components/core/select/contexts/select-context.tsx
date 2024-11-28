'use client';

import React, { createContext, useContext, useState } from 'react';

import {
  SelectContextOption,
  SelectContextProps,
  SelectProviderProps,
} from '../types';

const SelectContext = createContext<SelectContextProps>({
  selectedOption: null,
  setSelectedOption: () => {},
});

export const SelectProvider: React.FC<SelectProviderProps> = (props) => {
  const { children } = props;

  const [selectedOption, setSelectedOption] =
    useState<SelectContextOption>(null);

  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelect = () => useContext(SelectContext);
