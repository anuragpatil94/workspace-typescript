import { User } from "./User";
import { Company } from "./Company";
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

  //   1st Solution - BAD Approach - but the limitation is only the common properties can be used in this.
  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
    //   label: mappable.name
    });
  }
  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng
  //       },
  //       label: company.companyName
  //     });
  //   }
}
