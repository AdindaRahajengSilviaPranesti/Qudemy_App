import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {
  distributedColumnChart: any;
  basicLineChart: any;



  constructor() { }

  ngOnInit(): void {
    this._distributedColumnChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-dark", "--vz-info"]')
    this._basicLineChart('["--vz-primary"]');
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
* Distributed Columns Charts
 */
  private _distributedColumnChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.distributedColumnChart = {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30, 55, 88, 12, 1]
      }],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart: any, w: any, e: any) {
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['January',
           'February',
           'March',
           'April',
           'May',
           'June', 
          'July', 
          'August',
          'September',
          'October',
          'November',
          'December',     
          ],
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
    };
  }


    /**
    * Basic Line Chart
  */
    private _basicLineChart(colors:any) {
      colors = this.getChartColorsArray(colors);
      this.basicLineChart  = {
        series: [{
          name: "STOCK ABC",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        markers: {
          size: 4,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        colors: colors,
        title: {
          text: 'Product Trends by Month',
          align: 'left',
          style: {
            fontWeight: 500,
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      };
    }
}
