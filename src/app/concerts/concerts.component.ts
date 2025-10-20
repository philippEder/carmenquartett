import { Component } from '@angular/core';
import { Concert } from './domain/Concert';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent {

  CONCERT_IMAGES_BASE: string = "/assets/images/concerts/"


  ngOnInit(): void {
  }

  

  upcoming: Concert[] = [
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Nordlichter', 
        dates: ["Musikschule Schallerbach, 9.6.2024 10:30", "Zuhause, 10.6.2024 10:30", "15.6.2024 10:30"], 
        description: 'Ausflug nach ganz Oben. Die Polarlichter vertont. An diesem Abend empführen sie Carmen und die Anderen irgendwohin. Ich brauche einen langen Text zum Testen.' 
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Südlichter', 
        dates: ["9.6.2024 10:30"], 
        description: '9.6.2024, 10:30' },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Ostlichter', 
        dates: ["9.6.2024 10:30"], 
        description: 'Eintritt frei' 
    }
  ];
 
}
