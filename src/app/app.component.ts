import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'CarmenQuartett';

  smoothScrollTo(id: string, ) {
      let options: ScrollIntoViewOptions = {
        behavior: 'smooth'
      }
      document.getElementById(id).scrollIntoView(options)
  }
}
