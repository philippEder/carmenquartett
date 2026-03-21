import { Component, HostListener, inject } from '@angular/core';
import { BrowserService } from '../service/BrowserService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {

  isMobile: boolean = false;

  broswerService: BrowserService = inject(BrowserService);

  constructor() {
    this.checkIsMobile();
  }

  
  @HostListener('window:resize')
  onResize() {
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.isMobile = this.broswerService.isMobile();
  }
  
  smoothScrollTo(id: string) {
        let options: ScrollIntoViewOptions = {
            behavior: 'smooth'
        }
        document.getElementById(id).scrollIntoView(options)
  }

}
