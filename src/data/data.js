import React from 'react'

import usAll from "../data/india";

// export const colorsCountrywise = ["#ed2939", "#ffea00", "#268df9", "#24b314", "#0033a0", "#66033c"]
export const colorsCountrywise = [ 
                                  "rgb(41,153,237,1)",
                                  "rgb(237,41,57,0.4)", 
                                  "rgb(36,179,20,0.4)", 
                                  "rgb(248,215,0,0.4)", 
                                  "rgb(102,3,60,0.4)"]

export const lineDataCountrywise = {
    type: 'line',
    labels: [],
    datasets: []
  };

export const lineDataCountrywiseInfectionRate = {
    type: 'line',
    labels: [],
    datasets: []
};

export const lineDataCountrywiseMortalityRate = {
    type: 'line',
    labels: [],
    datasets: []
};

export const lineDataCountrywiseFatalityRate = {
    type: 'line',
    labels: [],
    datasets: []
};

export const optionPropertiesCountrywiseInfectionRate = {
  maintainAspectRatio: true,
    legend: {
      display: true,
      labels:{
        fontFamily: ["Inter", "Sans-serif"],
        fontSize: 11,
        boxWidth: 8,
      },
    },
    tooltips: {
      mode: 'x'
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Days since 500 Confirmed cases'
        },
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:15,
            fontSize: '11',
            fontColor: '#000',
            fontFamily: ["Inter", "Sans-serif"],
        },
        gridLines: {
          color: 'rgba(0,0,0,0.01)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Confirmed (today / yesterday)'
        },  
        ticks: {
          min: 0.9,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:8,
          fontSize: '11',
          fontColor: '#000',
          fontFamily: ["Inter", "Sans-serif"], 
        }}]
    }
  }

  export const optionPropertiesCountrywiseMortalityRate = {
  maintainAspectRatio: true,
    legend: {
      display: true,
      labels:{
        fontFamily: ["Inter", "Sans-serif"],
        fontSize: 11,
        boxWidth: 8,
      },
    },
    tooltips: {
      mode: 'x'
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Days since 500 Confirmed cases'
        },
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:15,
            fontSize: '11',
            fontColor: '#000',
            fontFamily: ["Inter", "Sans-serif"],
        },
        gridLines: {
          color: 'rgba(0,0,0,0.01)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'deaths per million'
        },  
        ticks: {
          min: 0,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:5,
          fontSize: '11',
          fontColor: '#000',
          fontFamily: ["Inter", "Sans-serif"], 
        }}]
    }
  }

  export const optionPropertiesCountrywiseFatalityRate = {
  maintainAspectRatio: true,
    legend: {
      display: true,
      labels:{
        fontFamily: ["Inter", "Sans-serif"],
        fontSize: 11,
        boxWidth: 8,
      },
    },
    tooltips: {
      mode: 'x'
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Days since 500 Confirmed cases'
        },
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:15,
            fontSize: '11',
            fontColor: '#000',
            fontFamily: ["Inter", "Sans-serif"],
        },
        gridLines: {
          color: 'rgba(0,0,0,0.01)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'deaths / confirmed [%]'
        },  
        ticks: {
          min: 0,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:5,
          fontSize: '11',
          fontColor: '#000',
          fontFamily: ["Inter", "Sans-serif"], 
        }}]
    }
  }

  export const optionBar = { maintainAspectRatio: true,legend: {
    display: false
  },scales: {
    xAxes: [{
      ticks: {
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:4,
          fontSize: '11',
          fontColor: '#rgba(0,0,0,0.8)',
          fontFamily: ["Inter", "Sans-serif"],
      },
      gridLines: {
        color: 'rgba(0,0,0,0.05)',
        zeroLineColor: 'rgba(0,0,0,0.05)'
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        autoSkip:true,
        maxRotation: 0,
        minRotation: 0,
        maxTicksLimit:5,
        fontFamily: ["Inter", "Sans-serif"],
      }
    }]
  } 
  }

export const optionPropertiesCountrywise = {
  maintainAspectRatio: true,
    legend: {
      display: true,
      labels:{
        fontFamily: ["Inter", "Sans-serif"],
        fontSize: 11,
        boxWidth: 8,
      },
    },
    tooltips: {
      mode: 'x'
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Days since 500 Confirmed cases'
        },
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:15,
            fontSize: '11',
            fontColor: '#000',
            fontFamily: ["Inter", "Sans-serif"],
        },
        gridLines: {
          color: 'rgba(0,0,0,0.01)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Confirmed Cases'
        },
        display: true,
        ticks: {
          // beginAtZero: true,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:8,
          fontSize: '11',
          fontColor: '#000',
          fontFamily: ["Inter", "Sans-serif"],
        }}]
    }
  }


export var lineDataTotal = {
    type: 'bar',
    labels: ["1", "5", "10", "15", "20", "25", "30", "35"],
    datasets: [
    {
      label: "Confirmed",
      legendText: "Confirmed",
      fill: false,
      // fillColor: "rgba(151,187,205,0.1)",
      backgroundColor: "#ff7b7b",
      borderColor: "#e65252",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: "#fff",
      pointBackgroundColor: "#e65252",
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: "#FC2055",
      // pointHoverBorderColor: "#fff",
      // pointHoverBorderWidth: 3,
      pointRadius: 2,
      // pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4
    },
    {
      label: "Recovered",
      legendText: "Recovered",
      fill: false,
      backgroundColor: "#8cdf87",
      borderColor: "#24b314",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: "#fff",
      pointBackgroundColor: "#24b314",
      // pointBorderWidth: 0,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: "#FC2055",
      // pointHoverBorderColor: "#fff",
      // pointHoverBorderWidth: 3,
      pointRadius: 2,
      // pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4
    }
    // {
    //   type: "line",
    //   yAxisID: "bar-y-axis",
    //   label: "Total Cases",
    //   legendText: "Active",
    //   fill: false,
    //   backgroundColor: "#000",
    //   borderColor: "#000",
    //   // borderCapStyle: 'butt',
    //   // borderDash: [],
    //   // borderDashOffset: 0.0,
    //   // borderJoinStyle: 'miter',
    //   // pointBorderColor: "#fff",
    //   pointBackgroundColor: "#268df9",
    //   // pointBorderWidth: 2,
    //   // pointHoverRadius: 5,
    //   // pointHoverBackgroundColor: "#FC2055",
    //   // pointHoverBorderColor: "#fff",
    //   // pointHoverBorderWidth: 3,
    //   pointRadius: 2,
    //   // pointHitRadius: 5,
    //   data: [27, 20, 44, 24, 29, 22, 43, 52],
    //   spanGaps: false,
    //   lineTension: 0.4,
    // }
    // {
    //   label: "Deceased",
    //   legendText: "Deceased",
    //   fill: false,
    //   backgroundColor: "#3e4b5b",
    //   borderColor: "#3e4b5b",
    //   // borderCapStyle: 'butt',
    //   // borderDash: [],
    //   // borderDashOffset: 0.0,
    //   // borderJoinStyle: 'miter',
    //   // pointBorderColor: "#fff",
    //   pointBackgroundColor: "#3e4b5b",
    //   // pointBorderWidth: 2,
    //   // pointHoverRadius: 5,
    //   // pointHoverBackgroundColor: "#FC2055",
    //   // pointHoverBorderColor: "#fff",
    //   // pointHoverBorderWidth: 2,
    //   pointRadius: 2,
    //   // pointHitRadius: 5,
    //   data: [27, 20, 44, 24, 29, 22, 43, 52],
    //   spanGaps: false,
    //   lineTension: 0.4
    // }
    ]
  };

  export const lineDataDeaths = {
    labels: [],
    datasets: [{
      label: "Deceased",
      fill: false,
      // backgroundColor: "#3e4b5b",
      borderColor: "#3e4b5b",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: "#fff",
      pointBackgroundColor: "#3e4b5b",
      // pointBorderWidth: 2,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: "#FC2055",
      // pointHoverBorderColor: "#fff",
      // pointHoverBorderWidth: 2,
      pointRadius: 2,
      // pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4
    }]
  };

  export const lineDataActive = {
    labels: [],
    datasets: [{
      label: "Active",
      fill: false,
      // backgroundColor: "#268df9",
      borderColor: "#268df9",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: "#fff",
      pointBackgroundColor: "#268df9",
      // pointBorderWidth: 2,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: "#FC2055",
      // pointHoverBorderColor: "#fff",
      // pointHoverBorderWidth: 3,
      pointRadius: 2,
      // pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4
    }]
  };

  export  const lineDataRecovered = {
    labels: [],
    datasets: [{
      label: "Recovered",
      fill: false,
      // backgroundColor: "#fff",
      borderColor: "#24b314",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: "#fff",
      pointBackgroundColor: "#24b314",
      // pointBorderWidth: 0,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: "#FC2055",
      // pointHoverBorderColor: "#fff",
      // pointHoverBorderWidth: 3,
      pointRadius: 2,
      // pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4
    }]
  };


// ------------------------------------------------------------------------------------
  export const othersTotal = {datasets: [{
        
          fill: true,
          lineTension: 0.4,
          backgroundColor: "#ffffff",
          borderColor: "#e65252",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#fff",
          pointBackgroundColor: "#2a2f37",
          pointBorderWidth: 2,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#FC2055",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          data:[],
          pointHitRadius: 0,
          spanGaps: false
  }]}

  export  const othersActive = {datasets: [{
        
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "#fff",
    pointBackgroundColor: "#2a2f37",
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: "#FC2055",
    pointHoverBorderColor: "#fff",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    data:[],
    pointHitRadius: 0,
    spanGaps: false
}]}

export const othersRecovered = {datasets: [{
        
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "#fff",
    pointBackgroundColor: "#2a2f37",
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: "#FC2055",
    pointHoverBorderColor: "#fff",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    data:[],
    pointHitRadius: 0,
    spanGaps: false
}]}

export const othersDeaths = {datasets: [{
        
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "#fff",
    pointBackgroundColor: "#2a2f37",
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: "#FC2055",
    pointHoverBorderColor: "#fff",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    data:[],
    pointHitRadius: 0,
    spanGaps: false
}]}

export  const optionPropertiesTotal = {
   
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            fontSize: '11',
            fontColor: '#969da5'
          },
          gridLines: {
            color: 'rgba(0,0,0,0.0)',
            zeroLineColor: 'rgba(0,0,0,0.0)'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
            min: -30
          }
        }]
    }
  }

  export  const optionPropertiesRecovered = {
   
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          fontSize: '11',
          fontColor: '#969da5'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.0)',
          zeroLineColor: 'rgba(0,0,0,0.0)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          min: -30
        }
      }]
  }
}

export const optionPropertiesActive = {
   
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          fontSize: '11',
          fontColor: '#969da5'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.0)',
          zeroLineColor: 'rgba(0,0,0,0.0)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          min: -30
        }
      }]
  }
}

export const optionPropertiesDeaths = {
   
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          fontSize: '11',
          fontColor: '#969da5'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.0)',
          zeroLineColor: 'rgba(0,0,0,0.0)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          min: -30
        }
      }]
  }
}

export const optionProperties = {
  maintainAspectRatio: true,
    legend: {
      display: true,
      labels:{
        fontFamily: ["Inter", "Sans-serif"],
        fontSize: 11,
        boxWidth: 8,
      },
    },
    tooltips: {
      mode: 'x'
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:5,
            fontSize: '11',
            fontColor: '#000',
            fontFamily: ["Inter", "Sans-serif"],
        },
        gridLines: {
          color: 'rgba(0,0,0,0.01)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        stacked: true,
        display: true,
        ticks: {
          beginAtZero: true,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:8,
          fontSize: '11',
          fontColor: '#000',
          fontFamily: ["Inter", "Sans-serif"],
        }}]
      // },
      // {
      //   id: "bar-y-axis",
      //   stacked: true,
      //   display: false, //optional
      //   ticks: {
      //     beginAtZero: true,
      //   },
      //   type: 'linear'
      // }]
    }
  }
  


  export const optionPropertiesData = {
    legend: {
      display: false
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:5,
            fontSize: '11',
            fontColor: '#rgba(0,0,0,0.8)'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.05)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:5,
        }
      }]
    }
  }

  export const optionPropertiesDataRecovered = {
    legend: {
      display: false
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:5,
            fontSize: '11',
            fontColor: '#rgba(0,0,0,0.8)'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.05)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:5,
        }
      }]
    }
  }

  export const optionPropertiesDataActive = {
    legend: {
      display: false
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:5,
            fontSize: '11',
            fontColor: '#rgba(0,0,0,0.8)'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.05)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:5,
        }
      }]
    }
  }

export const piedata = {
    chart: {
        height:"800px"
      },
	labels: [
		'Female',
		'Male',
		'Unidentifed'
	],
	datasets: [{
		data: [0, 0, 0],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


export const mapData = [
  ['madhya pradesh', 0],
  ['uttar pradesh', 0],
  ['karnataka', 0],
  ['nagaland', 0],
  ['bihar', 0],
  ['lakshadweep', 0],
  ['andaman and nicobar islands', 0],
  ['assam', 0],
  ['west bengal', 0],
  ['puducherry', 0],
  ['daman and diu', 0],
  ['gujarat', 0],
  ['rajasthan', 0],
  ['dadara and nagar havelli', 0],
  ['chhattisgarh', 0],
  ['tamil nadu', 0],
  ['chandigarh', 0],
  ['punjab', 0],
  ['haryana', 0],
  ['andhra pradesh', 0],
  ['maharashtra', 0],
  ['himachal pradesh', 0],
  ['meghalaya', 0],
  ['kerala', 0],
  ['telangana', 0],
  ['mizoram', 0],
  ['tripura', 0],
  ['manipur', 0],
  ['arunachal pradesh', 0],
  ['jharkhand', 0],
  ['goa', 0],
  ['delhi', 0],
  ['odisha', 0],
  ['jammu and kashmir', 0],
  ['sikkim', 0],
  ['uttarakhand', 0]
];

export const mapOptions = {
    chart: {
      map: "countries/ie/ie-all",
      height:"600px"
    },
    title: {
      text: " "
    },
    colorAxis: {
        min: 0,
        minColor: '#ffffff',
        maxColor: '#ff0000'  ,
        tickColor:"#ffffff",
        stops: [
            [0, '#ffffff'],
            [0.25, '#ffbaba'],
            [0.375, '#ff7b7b'],
            [0.5, '#ff5252'],
            [0.75, '#ff0000'],
            [1, '#a70000']
        ]
      },
    credits: {
      enabled: false
    },
    mapNavigation: {
      enabled: false
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        data: mapData,
        name: "Total Cases",
        states: {
            hover: {
                borderColor: '#ff0000'
            }
        },
        mapData: usAll,
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false
      }
    ]
  };

  export const barChartData = {
    labels: [],
    datasets: [
      {
        label: 'No. of Cases',
        backgroundColor: '#ff7b7b',
        borderWidth: 1,
        hoverBackgroundColor: '#ff0000',
        hoverBorderColor: '#ff0000',
        data: []
      }
    ]
  }

export default function data() {
    return (
        <div>
            
        </div>
    )
}
