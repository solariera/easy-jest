export type Common<T extends (...args: any) => any> = {
  id?: string;
  params: [...Parameters<T>];
};
