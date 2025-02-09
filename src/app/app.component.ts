import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { StartComponent } from './sections/start/start.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
