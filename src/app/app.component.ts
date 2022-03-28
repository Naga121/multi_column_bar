import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';
  view: any= [500, 500];
  colorScheme:any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  multi:any=[
  {
    "name": "Germany",
    "series": [
      {
        "name": "2009",
        "value": 30
      },
      {
        "name": "2010",
        "value": 30
      },
      {
        "name": "2011",
        "value": 40
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2009",
        "value": 30
      },
      {
        "name": "2010",
        "value": 70
      },
      {
        "name": "2011",
        "value": 82
      }
    ]
  },
  ]
  
}
