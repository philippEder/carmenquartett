import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  model: any = {};
  submitted = false;

  submit() {
    // This template simply simulates a submit; adapt to your backend / email provider.
    this.submitted = true;
    console.log('Contact form submitted', this.model);
  }
}
