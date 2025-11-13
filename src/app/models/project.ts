
export class Project {
  name!: string;
  backgroundImage!: string;
  mobile!: boolean
  stacks!: {image: string, name: string}[];
  slideImages!: string[];
  description!: string;
  linkGit!: string;
  linkProject!: string;

  constructor(name: string, backgroundImage: string, mobile: boolean = false, stacks: {image: string, name: string}[], 
    slideImages: string[], description: string, linkGit: string, linkProject: string
  ){
    this.name = name;
    this.backgroundImage = backgroundImage;
    this.mobile = mobile;
    this.stacks = stacks;
    this.slideImages = slideImages;
    this.description = description;
    this.linkGit = linkGit;
    this.linkProject = linkProject;
  }
}
