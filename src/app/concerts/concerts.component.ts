import { Component, HostListener } from '@angular/core';
import { Concert } from './domain/Concert';
import { Config } from '../common/constants/Config'

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent {

  CONCERT_IMAGES_BASE: string = "assets/images/concerts/"


  amountOfGigsToShow = 3;
  currentIndex = 0;
  visibleGigs = [];
  isFirstVisible = false;
  isLastVisible = false;

  ngOnInit() {
    this.updateVisibleGigs();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleGigs();
  }

  updateVisibleGigs() {
    this.computeAmountOfGigsToShow();
    this.visibleGigs = this.upcoming.slice(this.currentIndex, this.currentIndex + this.amountOfGigsToShow);
    this.toggleArrows();
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

  toggleArrows() {
    let firstGig = this.upcoming[0];
    let lastGig = this.upcoming[this.upcoming.length-1];

    this.isFirstVisible = this.visibleGigs.indexOf(firstGig) > -1;
    this.isLastVisible = this.visibleGigs.indexOf(lastGig) > -1;
  }

  computeAmountOfGigsToShow() {
    this.amountOfGigsToShow = Config.isMobile() ? 1 : 3;
  }

  upcoming: Concert[] = [
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-brunch.webp',
        title: 'Musik Brunch',
        dates: ["TBA"],
        description: ''
    },
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.webp',
        title: 'Nordlichter',
        dates: ["22.05.2024 19:00 Vituskirche Oberregau",
                "06.06.2024 10:30 RAUMSCHIFF Linz", 
                "09.06.2024 10:30 Musikschule Schallerbach"
               ],
        description: 'Eintritt Frei'
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-carmenquartett.webp', 
        title: 'Carmenquartett', 
        dates: [
                "11.07.2022 19:00 Kunst am Hof Spibach 6 4055 Pucking", 
                "12.07.2022 19:30 Kerschbaum 61 4261 Rainbach i.M."
              ], 
        description: '' 
    }
  ];
 
}
