import { Component, HostListener } from '@angular/core';
import { Config } from '../common/constants/Config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isMobile: boolean = false;


  ngOnInit() {
      this.checkIsMobile();
    }
  
  @HostListener('window:resize')
  onResize() {
    this.checkIsMobile;
  }

  checkIsMobile() {
    this.isMobile = Config.isMobile();
  }
  
  smoothScrollTo(id: string) {
        let options: ScrollIntoViewOptions = {
            behavior: 'smooth'
        }
        document.getElementById(id).scrollIntoView(options)
  }

}
