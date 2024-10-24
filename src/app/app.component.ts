import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemapComponent } from './tem/temap/temap.component';
import { AddmessageComponent } from './tem/addmessage/addmessage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemapComponent, AddmessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApi1';
}
