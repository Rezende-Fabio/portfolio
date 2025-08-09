import { Component, Inject } from '@angular/core';
import { Project } from '../../models/project';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-project.component.html',
  styleUrl: './modal-project.component.css'
})
export class ModalProjectComponent {
  public project!: Project;

  constructor(
    public dialogRef: MatDialogRef<ModalProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) {
    this.project = data
  }

  closeModal() {
    this.dialogRef.close();
  }
}
