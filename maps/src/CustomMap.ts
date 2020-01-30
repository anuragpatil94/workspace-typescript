// Instructios to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(htmlElementId) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlElementId),
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0
        }
      }
    );
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
      //   label: mappable.name
    });
  }

  //   1st Solution - BAD Approach - but the limitation is only the common properties can be used in this.
  //   addMarker(mappable: User | Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: mappable.location.lat,
  //         lng: mappable.location.lng
  //       }
  //       //   label: mappable.name
  //     });
  //   }
}
