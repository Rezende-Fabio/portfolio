import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private menuMobile!: HTMLElement;
  private navList!: HTMLElement;
  private navLinks!: NodeListOf<HTMLElement>;
  private links!: NodeListOf<HTMLElement>;
  private classeAtiva = 'ativa';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    this.menuMobile = this.el.nativeElement.querySelector('.menu-mobile')!;
    this.navList = this.el.nativeElement.querySelector('.nav-list')!;
    this.navLinks = this.el.nativeElement.querySelectorAll('.nav-list li');
    this.links = this.el.nativeElement.querySelectorAll('.link');

    this.addClickEvent();
    this.addClickEventLink();
  }

  addClickEvent() {
    this.renderer.listen(this.menuMobile, 'click', () => this.handleClick());
  }

  addClickEventLink() {
    this.links.forEach(link => {
      this.renderer.listen(link, 'click', () => this.handleClick());
    });
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ''
        : `navLinksFade 0.7s ease forwards ${index / 4 + 0.5}s`;
    });
  }

  handleClick() {
    if (window.innerWidth <= 1024) {
      this.animateLinks();
      this.toggleClass(this.navList, this.classeAtiva);
      this.toggleClass(this.menuMobile, this.classeAtiva);
    }
  }

  private toggleClass(element: HTMLElement, className: string) {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
    }
  }
}
