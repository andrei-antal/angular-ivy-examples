import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Turn up the volume, v9 style';
  condition = true;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.condition = !this.condition;
  }
}
