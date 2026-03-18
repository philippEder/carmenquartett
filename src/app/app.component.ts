import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  
  title = 'CarmenQuartett';

}
