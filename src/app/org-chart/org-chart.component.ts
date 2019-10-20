import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topEmployee: any = {
    name: 'Janis Martin',
    designation: 'Order Placer',
    img: "./assets/data/img/b.JPG",
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'Beneficial Owner',
        img: "./assets/data/img/b.JPG",
        subordinates: [
          {
            name: 'Tina Landry',
            designation: 'CEO',
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'Donor',
        img: "./assets/data/img/c.JPG",
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Director',
            img: "./assets/data/img/b.JPG",
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Limited Partner',
            img: "./assets/data/img/c.JPG",
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'Settlor',
        img: "./assets/data/img/a.JPG",
        subordinates: []
      }
    ]
  };
}
