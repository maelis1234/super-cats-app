export class Cat {
  id: number;
  name: string;
  breed: string;
  colors: string[];
  birthyear: number;
  birthplace: string;

  constructor(
    id: number,
    name: string,
    breed: string,
    colors: string[],
    birthyear: number,
    birthplace: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.breed = breed),
      (this.colors = colors),
      (this.birthyear = birthyear),
      (this.birthplace = birthplace);
  }
}
