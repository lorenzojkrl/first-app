import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  isVisible: boolean = true;
  text = 'yellow';
  fruitsList: string[] = ['Apple', 'Banana', 'Orange'];

  onClick() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
