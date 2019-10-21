import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/EmployeeService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]
})

/**
 * Home component
 */
export class HomeComponent {

  public colors = ["red", "blue", "green"];
  public getResponse: Object= null;

  constructor(private http: EmployeeService) {
    console.log('employee service injected' + http);
  }

  /**
   * 
   */
  public ngOnInit() {
    console.log('home ng init');
    this.http.listEmployees().subscribe((response) => {
      this.getResponse = response;
      console.log('emp service response:', this.getResponse);
    });
  }

}
