
import { purple500, purple400, purple300, deepPurple500, deepPurple400, deepPurple300 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export function bootstrapTheme() {
  const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
      // Primary
      primary1Color: deepPurple500,
      primary2Color: deepPurple400,
      primary3Color: deepPurple300,
      // Secondary
      accent1Color: purple500,
      accent2Color: purple400,
      accent3Color: purple300
    }
  });

  return muiTheme;
}


export const mapTheme = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#928ec3"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#f0f4f6"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#fcfcfc"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#fffbfb"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#dddddd"
      }
    ]
  }
];
