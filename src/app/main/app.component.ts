import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Sanrockzz Technologies'
  public contributor = 'Sanjeev Saxena (sanrocks123@gmail.com)'

  ngOnInit() {
    console.log('starting app')
  }
}
