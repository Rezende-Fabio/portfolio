import { Component } from '@angular/core';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  medSeniorApi: {name: string, image: string}[] = [
    { name: 'assets/icons/typescript.svg', image: "Typescript" },
    { name: 'assets/icons/nestjs.svg', image: "NestJs" },
    { name: 'assets/icons/prisma.svg', image: "Prisma" },
    { name: 'assets/icons/mongo.svg', image: "Mongo" },
    { name: 'assets/icons/docker.svg', image: "Docker" },
  ];

  medSeniorWeb: {name: string, image: string}[] = [
    { name: 'assets/icons/typescript.svg', image: "Typescript" },
    { name: 'assets/icons/vue.svg', image: "Vue" },
    { name: 'assets/icons/css.svg', image: "Css" },
    { name: 'assets/icons/docker.svg', image: "Docker" },
  ];

  medSeniorMobile: {name: string, image: string}[] = [
    { name: 'assets/icons/flutter.svg', image: "Flutter" },
  ];

  fruitMarketMobile: {name: string, image: string}[] = [
    { name: 'assets/icons/flutter.svg', image: "Flutter" },
  ];

  snackSpot: {name: string, image: string}[] = [
    { name: 'assets/icons/csharp.svg', image: "CSharp" },
    { name: 'assets/icons/html.svg', image: "Html" },
    { name: 'assets/icons/css.svg', image: "Css" },
    { name: 'assets/icons/postgres.svg', image: "Postgres" },
    { name: 'assets/icons/docker.svg', image: "Docker" },
  ];

}
