import { Component, AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { StartComponent } from './sections/start/start.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StartComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, FooterComponent],
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
    const windowTopCard = window.scrollY + window.innerHeight * 1;
    const elements = this.el.nativeElement.querySelectorAll('[data-anime]');
    const elementsCard = this.el.nativeElement.querySelectorAll('[data-anime-card]');

    elements.forEach((element: HTMLElement) => {
      if (windowTop > element.offsetTop) {
        this.renderer.addClass(element, 'animate');
      } else {
        this.renderer.removeClass(element, 'animate');
      }
    });

    var count: number = 0;
    var temp: number = 0.01;
    elementsCard.forEach((element: HTMLElement) => {
      if (count === 3){
        count = 0;
        temp = 0.01;
      }

      if (windowTopCard > element.offsetTop) {
        element.style.animation = `cardFade 0.7s ease forwards ${20 * temp}s`;
        element.classList.add("complete-animation");
      } else {
        element.style.animation = ``;
        element.classList.remove("complete-animation");
      }

      count += 1;
      temp += 0.02;
    });
  }
}
