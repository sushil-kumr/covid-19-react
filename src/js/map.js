// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  ['madhya pradesh', 0],
  ['uttar pradesh', 1],
  ['karnataka', 2],
  ['nagaland', 3],
  ['bihar', 4],
  ['lakshadweep', 5],
  ['andaman and nicobar', 6],
  ['assam', 7],
  ['west bengal', 8],
  ['puducherry', 9],
  ['daman and diu', 10],
  ['gujarat', 11],
  ['rajasthan', 12],
  ['dadara and nagar havelli', 13],
  ['chhattisgarh', 14],
  ['tamil nadu', 15],
  ['chandigarh', 16],
  ['punjab', 17],
  ['haryana', 18],
  ['andhra pradesh', 19],
  ['maharashtra', 20],
  ['himachal pradesh', 21],
  ['meghalaya', 22],
  ['kerala', 23],
  ['telangana', 24],
  ['mizoram', 25],
  ['tripura', 26],
  ['manipur', 27],
  ['arunanchal pradesh', 28],
  ['jharkhand', 29],
  ['goa', 30],
  ['nct of delhi', 31],
  ['odisha', 32],
  ['jammu and kashmir', 33],
  ['sikkim', 34],
  ['uttarakhand', 35]
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'countries/in/custom/in-all-disputed'
  },

  title: {
    text: ''
  },
    
  copyright: {
      text: ""
  },

  copyrightShort: {
                    
    text: "agjdad"},    
    
                    
                    
                    

  subtitle: {
    text: ''
  },

  mapNavigation: {
    enabled: false,
    buttonOptions: {
      verticalAlign: 'bottom'
    }
  },

  colorAxis: {
    min: 0,
    minColor: '#fff5f0',
    maxColor: '#be171c'  
  },
    
    
    

  series: [{
    data: data,
    name: 'Random data',
    states: {
      hover: {
        bordercolor: '#000000'
      }
    },
    dataLabels: {
      enabled: false,
      format: '{point.name}'
    }
  }]
});
