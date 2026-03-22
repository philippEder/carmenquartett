import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {

  smoothScrollTo(id: string) {
    const options: ScrollIntoViewOptions = {
      behavior: 'smooth'
    };
    document.getElementById(id)?.scrollIntoView(options);
  }

}
