import { Component, AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { StartComponent } from './sections/start/start.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StartComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.animeScroll(); // Chama a função no início
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animeScroll();
  }

  private animeScroll() {
    const windowTop = window.scrollY + window.innerHeight * 0.95;
    const elements = this.el.nativeElement.querySelectorAll('[data-anime]');

    elements.forEach((element: HTMLElement) => {
      if (windowTop > element.offsetTop) {
        this.renderer.addClass(element, 'animate');
      } else {
        this.renderer.removeClass(element, 'animate');
      }
    });
  }
}
