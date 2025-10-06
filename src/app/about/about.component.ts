import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  members = [
    { name: 'Violin I — Anna Müller', bio: 'Founding member — focused on contemporary repertoire.' },
    { name: 'Violin II — Lukas Schneider', bio: 'Chamber musician and educator.' },
    { name: 'Viola — Maria Kovac', bio: 'Performer and collaborator in many cross-genre projects.' },
    { name: 'Cello — Peter Hofmann', bio: 'Soloist and chamber musician.' }
  ];
}
