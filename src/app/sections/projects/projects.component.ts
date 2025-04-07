import { Component } from '@angular/core';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  listProjects: Project[] = [];

  readonly medSeniorApi: Project = new Project(
    "Med Senior API",
    "assets/images/projects/med_senior_api/med_senior_api.png",
    false,
    [
      { image: 'assets/icons/typescript.svg', name: "Typescript" },
      { image: 'assets/icons/nestjs.svg', name: "NestJs" },
      { image: 'assets/icons/prisma.svg', name: "Prisma" },
      { image: 'assets/icons/mongo.svg', name: "Mongo" },
      { image: 'assets/icons/docker.svg', name: "Docker" },
    ]
  );

  readonly medSeniorWeb: Project = new Project(
    "Med Senior Web",
    "assets/images/projects/med_senior_web/med_senior_web.png",
    false,
    [
      { image: 'assets/icons/typescript.svg', name: "Typescript" },
      { image: 'assets/icons/vue.svg', name: "Vue" },
      { image: 'assets/icons/css.svg', name: "Css" },
      { image: 'assets/icons/docker.svg', name: "Docker" },
    ]
  );

  readonly medSeniorMobile: Project = new Project(
    "Med Senior Mobile",
    "assets/images/projects/med_senior_mobile/med_senior_mobile.jpg",
    false,
    [
      { image: 'assets/icons/flutter.svg', name: "Flutter" },
    ]
  );

  readonly fruitMarketMobile: Project = new Project(
    "Fruit Market Mobile",
    "assets/images/projects/fruit_market/fruit_market.png",
    true,
    [
      { image: 'assets/icons/flutter.svg', name: "Flutter" },
    ]
  );

  readonly snackSpot: Project = new Project(
    "Snack Spot",
    "assets/images/projects/snack_spot/snack_spot.png",
    false,
    [
      { image: 'assets/icons/csharp.svg', name: "CSharp" },
      { image: 'assets/icons/net_framework.svg', name: "Net Framework" },
      { image: 'assets/icons/html.svg', name: "Html" },
      { image: 'assets/icons/css.svg', name: "Css" },
      { image: 'assets/icons/bootstrap.svg', name: "Bootstrap" },
      { image: 'assets/icons/postgres.svg', name: "Postgres" },
      { image: 'assets/icons/docker.svg', name: "Docker" },
    ]
  );

  readonly gef: Project = new Project(
    "GEF",
    "assets/images/projects/gef/gef.png",
    false,
    [
      { image: 'assets/icons/python.svg', name: "Python" },
      { image: 'assets/icons/flask.svg', name: "Flask" },
      { image: 'assets/icons/html.svg', name: "Html" },
      { image: 'assets/icons/css.svg', name: "Css" },
      { image: 'assets/icons/bootstrap.svg', name: "Bootstrap" },
      { image: 'assets/icons/sqlite.svg', name: "SQLite" },
    ]
  );

  readonly scanawe: Project = new Project(
    "Scanawe",
    "assets/images/projects/scanawe/scanawe.png",
    false,
    [
      { image: 'assets/icons/python.svg', name: "Python" },
      { image: 'assets/icons/flask.svg', name: "Flask" },
      { image: 'assets/icons/html.svg', name: "Html" },
      { image: 'assets/icons/css.svg', name: "Css" },
      { image: 'assets/icons/bootstrap.svg', name: "Bootstrap" },
      { image: 'assets/icons/sqlite.svg', name: "SQLite" },
    ]
  );

  readonly myCarMobile: Project = new Project(
    "My Car Mobile",
    "assets/images/projects/my_car_mobile/my_car_mobile.jpg",
    true,
    [
      { image: 'assets/icons/flutter.svg', name: "Flutter" },
    ]
  );

  ngOnInit(): void {
    this.listProjects.push(this.medSeniorApi);
    this.listProjects.push(this.medSeniorWeb);
    this.listProjects.push(this.medSeniorMobile);
    this.listProjects.push(this.fruitMarketMobile);
    this.listProjects.push(this.snackSpot);
    this.listProjects.push(this.gef);
    this.listProjects.push(this.scanawe);
    this.listProjects.push(this.myCarMobile);
  }
}
