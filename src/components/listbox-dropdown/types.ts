export type TOption = {
  value: any;
  text: string;
};

/**
 * Key is TOption's value
 */
export type NormalizeOption = Map<any, TOption>;
