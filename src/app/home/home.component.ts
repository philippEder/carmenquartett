import { Component, HostListener, inject } from '@angular/core';
import { ConfigService } from '../service/ConfigService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {

  isMobile: boolean = false;

  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.checkIsMobile();
  }

  
  @HostListener('window:resize')
  onResize() {
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.isMobile = this.configService.isMobile();
  }
  
  smoothScrollTo(id: string) {
        let options: ScrollIntoViewOptions = {
            behavior: 'smooth'
        }
        document.getElementById(id).scrollIntoView(options)
  }

}
