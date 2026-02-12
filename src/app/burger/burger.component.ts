import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {

    isOpen = false;

    ngOnInit(): void {
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    onMenuClick(destinationId: string) {
        this.closeMenu();
        this.smoothScrollTo(destinationId);
    }

    closeMenu() {
        this.isOpen = false;
    }

    smoothScrollTo(id: string) {
        let options: ScrollIntoViewOptions = {
            behavior: 'smooth'
        }
        document.getElementById(id).scrollIntoView(options)
  }

}
