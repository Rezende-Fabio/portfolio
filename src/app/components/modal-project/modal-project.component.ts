import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { Project } from '../../models/project';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper/types';
import SwiperCore from 'swiper';
import { SwiperContainer } from 'swiper/element/bundle';

@Component({
  selector: 'app-modal-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-project.component.html',
  styleUrl: './modal-project.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
