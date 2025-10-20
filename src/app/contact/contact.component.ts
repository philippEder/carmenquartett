import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  serviceId: string = "carmenquartett_default";
  templateId: string = "template_dmz6crl";
  pub: string = "AsHWmySl4PnawMKdK";

  senderName: string;
  senderEmail: string;
  senderMessage: string;

  submitted:  boolean = false;

  ngOnInit(): void {
    emailjs.init(this.pub);
  }

  submit() {
    const templateParams = {
        from_name: this.senderName,
        from_email: this.senderEmail,
        message: this.senderMessage,
    };

    emailjs.send(this.serviceId, this.templateId, templateParams)
      .then((response) => {
        this.submitted = true;
      }, (error) => {
         console.error('Email sending failed:', error);
      });
  }
}
