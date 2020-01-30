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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      },
      label: user.name
    });
  }
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      },
      label: company.companyName
    });
  }
}
