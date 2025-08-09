import { Component } from '@angular/core';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { Project } from '../../models/project';
import { fruitMarketMobile, gef, medSeniorApi, medSeniorMobile, medSeniorWeb, myCarMobile, scanawe, snackSpot } from '../../data/projects.data';
import { MatDialog } from '@angular/material/dialog';
import { ModalProjectComponent } from '../../components/modal-project/modal-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  listProjects: Project[] = [];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listProjects.push(medSeniorApi);
    this.listProjects.push(medSeniorWeb);
    this.listProjects.push(medSeniorMobile);
    this.listProjects.push(fruitMarketMobile);
    this.listProjects.push(snackSpot);
    this.listProjects.push(gef);
    this.listProjects.push(scanawe);
    this.listProjects.push(myCarMobile);
  }

  openModalViewProject(project: Project) {
    this.dialog.open(ModalProjectComponent, {
      height: "78%",
      maxHeight: "100%",
      width: '90%',
      maxWidth: '100%',
      data: project,
      enterAnimationDuration: '300ms', 
      exitAnimationDuration: '300ms'
    });
  }
}
