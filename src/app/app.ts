import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackForm } from "./feedback-form/feedback-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedbackForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
