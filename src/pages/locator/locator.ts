import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-locator',
  templateUrl: 'locator.html'
})
export class LocatorPage {

  results: Array<any>

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, private geolocation: Geolocation) {
    this.results = navParams.get('results');
    console.log(this.results)
  }
  
  coords: string

  ionViewDidLoad() {
    /* Grab user coordinates when page loads */
    this.geolocation.getCurrentPosition().then((res) => {
      let coordinates = res.coords.latitude + "," + res.coords.longitude
      this.coords = coordinates
      console.log("Retrieving Coordinates", this.coords)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  async findGym() {

    /* Proxy Google Places API Request through Heroku app */
    let placesNearbyURL = "https://tranquil-cove-24264.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCKphNg8Qmd3wn6aedPmr-yeRvSOBhAVJ8&type=gym&radius=10000&opennow=true&&sensor=false&location=" + this.coords;
    console.log(placesNearbyURL)


   /* Perform API request and convert to JSON */
   let res = await fetch(placesNearbyURL);
   let JSONResponse = await res.json();
   let results: Array<Object> = await JSONResponse["results"];

   if (results.length === 0) {
     this.showAlert();
     return;
   }

   /* Pushes results to same page */
   this.navCtrl.push(LocatorPage, {results:results});
  };

/*Alerts if no gyms are open nearby */
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'No Results Found!',
      subTitle: 'Please try again later.',
      buttons: ['OK']
    });
    alert.present();
  };

}
