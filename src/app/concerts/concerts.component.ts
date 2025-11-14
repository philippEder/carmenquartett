import { Component, HostListener } from '@angular/core';
import { Concert } from './domain/Concert';
import { Config } from '../common/constants/Config'

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent {

  CONCERT_IMAGES_BASE: string = "/assets/images/concerts/"


  amountOfGigsToShow = 3;
  currentIndex = 0;
  visibleGigs = [];

  ngOnInit() {
    this.updateVisibleGigs();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleGigs();
  }

  updateVisibleGigs() {
    this.amountOfGigsToShow = Config.isMobile() ? 1 : 3;
    this.visibleGigs = this.upcoming.slice(this.currentIndex, this.currentIndex + this.amountOfGigsToShow);
  }

  next() {
    if ((this.currentIndex + this.amountOfGigsToShow) < this.upcoming.length) {
      this.currentIndex++;
      this.updateVisibleGigs();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleGigs();
    }
  }

  upcoming: Concert[] = [
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Nordlichter', 
        dates: ["09.06.2024 10:30 Musikschule Schallerbach", "10.06.2024 10:30 Zuhause", "15.06.2024 10:30 Brucknerhaus 18"], 
        description: 'Ausflug nach ganz Oben. Die Polarlichter vertont. An diesem Abend entführen Sie Carmen und die Anderen irgendwohin. Ich brauche einen langen Text zum Testen.' 
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Südlichter', 
        dates: ["09.06.2024 10:30 Brucknerhaus 18"], 
        description: 'Höhenflug mal anders. Dieses Mal gehts in Steilkurve der Sonne entgegen. Urlaubsfeeling garantiert!.' 
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Ostlichter', 
        dates: ["09.06.2024 10:30 Brucknerhaus 18"], 
        description: 'Eintritt frei' 
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Ostlichter', 
        dates: ["09.06.2024 10:30 Brucknerhaus 18"], 
        description: 'Eintritt frei' 
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.jpeg', 
        title: 'Ostlichter', 
        dates: ["09.06.2024 10:30 Brucknerhaus 18"], 
        description: 'Eintritt frei' 
    }
  ];
 
}
