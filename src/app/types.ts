export type Birth = {
  year: number,
  text: string,
};

export type Births = Birth[];

export type State = {
  births: {
    list: Births,
  },
}