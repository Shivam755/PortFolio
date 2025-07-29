import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-feedback-form',
  imports: [ReactiveFormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.scss'
})
export class FeedbackForm {
  constructor(private emailservice:EmailService){}

  contactForm = new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.required, Validators.pattern(/^\p{L}+(?:[-' ]\p{L}+)*$/u)]
    }),
    email: new FormControl<string>('',{
      validators: [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    }),
    title: new FormControl<string>('',{
      validators: [Validators.required,]
    }),
    message: new FormControl<string>('', {
      validators: [Validators.required, Validators.maxLength(2000)]
    })
  });

  onSubmit = () => {
    console.log(this.contactForm);
    if (this.contactForm.invalid){
      console.log("Invalid form");
      return;
    }

    this.emailservice.sendEmail(this.contactForm.value);

  }
}
