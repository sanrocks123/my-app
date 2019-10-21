import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('OrgChart initialized')
  }

  topEmployee: any = {
    name: 'Janis Martin',
    designation: 'Order Placer',
    //img: "./assets/data/img/b.jpga",
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'Beneficial Owner',
        //img: "./assets/data/img/b.jpga",
        subordinates: [
          {
            name: 'Tina Landry',
            designation: 'CEO',
            //img: "./assets/data/img/c.jpga",
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'Donor',
        //img: "./assets/data/img/c.jpga",
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Director',
            //img: "./assets/data/img/b.jpga",
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Limited Partner',
            //img: "./assets/data/img/c.jpga",
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'Settlor',
        //img: "./assets/data/img/a.jpga",
        subordinates: []
      }
    ]
  };
}
