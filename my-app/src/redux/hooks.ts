// src/redux/hooks.ts

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';

 // Typed hook for using Redux state

 export const UseAppSelector : TypedUseSelectorHook<RootState> = useSelector

//    - *Explanation*: Ye custom hook useSelector ka type-safe version hai, jo tumhare Redux store ke RootState type ko inherit karega.