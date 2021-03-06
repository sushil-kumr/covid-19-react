import React from 'react'

import usAll from "../data/india";

export const colorsCountrywise = [ 
  "rgb(41,153,237,0.8)",
  "rgb(237,41,57,0.4)", 
  "rgb(36,179,20,0.4)", 
  "rgb(248,215,0,0.6)", 
  "rgb(102,3,60,0.4)", 
  "rgb(139,69,19,0.4)", 
  "rgb(0,128,128,0.4)", 
  "rgb(226,153,253,0.7)", 
  "rgb(253,165,15,0.7)", 
  "rgb(219,143,141,0.7)",
  "rgb(39,88,156,0.6)",
  "rgb(179,155,0,0.6)",
  "rgb(13,93,132,0.7)",
  "rgb(145,170,225,0.7)"]

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
  maintainAspectRatio: false,
  aspectRatio: 5,
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
      type: "line",
      label: "Total Cases",
      legendText: "Active",
      fill: false,
      backgroundColor: "#555",
      borderColor: "#555",
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
      data: [],
      spanGaps: false,
      lineTension: 0.4,
      yAxisID: '2'
    },
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
      lineTension: 0.4,
      yAxisID: '1'
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
      lineTension: 0.4,
      yAxisID: '1'
    },
    {
      label: "Deceased",
      legendText: "Deceased",
      fill: false,
      backgroundColor: "#777",
      borderColor: "#777",
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
    }
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

  export const lineData = {
    labels: [],
    datasets: [{
      label: "Active",
      fill: false,
      borderColor: "#268df9",
      pointBackgroundColor: "#268df9",
      pointRadius: 2,
      data: [],
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
          labels: ["1", "2"] ,
          fill: true,
          lineTension: 0.4,
          backgroundColor: "#ffffff",
          borderColor: "#e65252",
          borderWidth: 3,
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
    labels: ["1", "2"] ,
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderWidth: 3,
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
    labels: ["1", "2"] ,
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderWidth: 3,
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
    labels: ["1", "2"],
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderWidth: 3,
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
    maintainAspectRatio: false,
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
        id: '1',
        stacked: true,
        display: true,
        position: 'left',
        ticks: {
          beginAtZero: true,
          autoSkip:true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit:8,
          fontSize: '11',
          fontColor: '#000',
          fontFamily: ["Inter", "Sans-serif"],
        }
      },
      {
        id: '2',
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          min: 0
        },
          gridLines:{
            display: false
          }
      }]
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
        height:"500px"
      },
	labels: [
    'Not Available',
		'Female',
		'Male'
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

export const mapOptions = {
    chart: {
      map: "",
      height:"500px"
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
            [0, '#FFEBEE'],
            [0.25, '#F1948A'],
            [0.5, '#E74C3C'],
            [0.75, '#F44336'],
            [1, '#E53935']
        ]
      },
    credits: {
      enabled: false
    },
    mapNavigation: {
      enabled: false
    },
    tooltip: { enabled: false },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        data: null,
        name: "Total Cases",
        states: {
            hover: {
                borderColor: '#ff0000'
            }
        },
        mapData: usAll,
        borderColor: "#A0A0A0",
        nullColor: "#ffffff",
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
        data: [],
        spanGaps: false,
        lineTension: 0.4,
      }
    ]
  }

  export const optionUSA = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          min: 0
        }
      }]
    }
  }

  export const lineDataUSA = {
    labels: [],
    datasets: [{
      fill: false,
      lineTension: 0.4,
      borderColor: "#e65252",
      pointRadius: 0,
      data:[],
      pointHitRadius: 0,
      spanGaps: false
    }]
  };

export default function data() {
    return (
        <div>
            
        </div>
    )
}
