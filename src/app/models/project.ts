
export class Project {
  name!: string;
  backgroundImage!: string;
  mobile!: boolean
  stacks!: {image: string, name: string}[];

  constructor(name: string, backgroundImage: string, mobile: boolean = false, stacks: {image: string, name: string}[]){
    this.name = name;
    this.backgroundImage = backgroundImage;
    this.mobile = mobile;
    this.stacks = stacks;
  }
}
