import { Component } from '@angular/core';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html'
})
export class RepertoireComponent {
  works = [
    { title: 'Beethoven — String Quartet in F major, Op. 18 No. 1', year: 1798 },
    { title: 'Schoenberg — Transfigured Night (arr.)', year: 1899 },
    { title: 'New Work — "Glass & Ash"', year: 2024 }
  ];
}
