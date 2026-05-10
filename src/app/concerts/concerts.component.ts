import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Concert } from './domain/Concert';
import { BrowserService } from '../service/BrowserService';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css'],
  standalone: false
})
export class ConcertsComponent implements OnInit {

  CONCERT_IMAGES_BASE: string = "assets/images/concerts/"

  amountOfGigsToShow = 3;
  currentIndex = 0;
  visibleGigs = [];
  isFirstVisible = false;
  isLastVisible = false;

  broswerService: BrowserService = inject(BrowserService);

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
    const w = this.broswerService.getInnerWidth();
    let amountOfGigsToShow = 3;
    if (w <= 640) {
      amountOfGigsToShow = 1;
    } else if (w <= 1320) {
      amountOfGigsToShow = 2;
    }
    this.amountOfGigsToShow = amountOfGigsToShow;
    const maxStart = Math.max(0, this.upcoming.length - amountOfGigsToShow);
    if (this.currentIndex > maxStart) {
      this.currentIndex = maxStart;
    }
  }

  upcoming: Concert[] = [
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-koste-die-welt.webp',
        title: 'Koste die Welt',
        dates: ["20.05.2026 19:30 \n Vituskirche Oberregau \n \n",
                "04.06.2026 20:00 \n Café Viele Leute Linz"
        ],
        description: "Dvoraks Amerikanisches Streichquartett und Volksmusik aus aller Welt. \n \n Eintritt frei!",
        link: null
    },
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-brunch.webp',
        title: 'Musik Brunch - Kunst am Hof-Festival',
        dates: ["09.08.2026 10:30 \n Sipbach 6 4055 Pucking"],
        description: null,
        link: {
          link: 'https://kupfticket.com/en/events/crosscultural-musikbrunch-koste-die-welt',
          text: 'Zu den Tickets'
        }
    },
    {
        image: this.CONCERT_IMAGES_BASE + 'concert-nordlichter.webp',
        title: 'Nordlichter',
        dates: ["22.05.2024 19:00 \n Vituskirche Oberregau \n \n",
                "06.06.2024 10:30 \n RAUMSCHIFF Linz \n \n", 
                "09.06.2024 10:30 \n Musikschule Schallerbach"
               ],
        description: 'Eintritt Frei',
        link: null
    },
    { 
        image: this.CONCERT_IMAGES_BASE + 'concert-carmenquartett.webp', 
        title: 'Carmenquartett', 
        dates: [
                "11.07.2022 19:00 \n Kunst am Hof Spibach 6 4055 Pucking \n \n", 
                "12.07.2022 19:30 \n Kerschbaum 61 4261 Rainbach i.M."
              ], 
        description: null,
        link: null
    }
  ];
 
}
