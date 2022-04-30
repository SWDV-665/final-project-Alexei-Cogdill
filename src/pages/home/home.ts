import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}

/* Serves as the template for the displayed box */
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Workout Details
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios, windows">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <h1>{{workout.name}} workouts</h1>
        <p>{{workout.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of workout['items']">
        {{item.title}}
        <ion-note color="secondary" item-end>
          {{item.sets}} sets of {{item.reps}}
        </ion-note>
      </ion-item>
  </ion-list>
  <h1 text-center>Click outside of box to close</h1>
</ion-content>
`
})
export class ModalContentPage {
  workout;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

    /* workout information to be displayed for each row item */
    var workouts = [
      {
        name: 'Back',
        items: [
          { title: 'Deadlift', reps: 12, sets: 3},
          { title: 'Pull Up', reps: 12, sets: 3},
          { title: 'Seated Row', reps: 12, sets: 3},
          { title: 'Single-Arm Dumbbell Row', reps: 12, sets: 3},
          { title: 'Dumbbell Pull-Over', reps: 12, sets: 3},
          { title: 'Chest-Supported Row', reps: 12, sets: 3}
        ]
      },
      {
        name: 'Leg',
        items: [
          { title: 'Leg Press', reps: 12, sets: 3},
          { title: 'Seated Hamstring Curl', reps: 12, sets: 3},
          { title: 'Dumbbell Lunge', reps: 12, sets: 3},
          { title: 'Dumbbell Squat', reps: 12, sets: 3},
        ]
      },
      {
        name: 'Chest',
        items: [
          { title: 'Barbell Bench Press', reps: 12, sets: 3},
          { title: 'Incline Dumbbell Bech Press', reps: 12, sets: 3},
          { title: 'Cable Crossover', reps: 12, sets: 3},
          { title: 'Chest Press Machine', reps: 12, sets: 3},
          { title: 'Low-Cable Crossover', reps: 12, sets: 3},
        ]
      },
      {
        name: 'Biceps',
        items: [
          { title: 'Twisting Dumbbell Curl', reps: 12, sets: 3},
          { title: 'Prone Dumbbell Spider Curl', reps: 12, sets: 3},
          { title: 'Concentration Curl', reps: 12, sets: 3},
          { title: 'Seated Row', reps: 12, sets: 3},
        ]
      },
      {
        name: 'Triceps',
        items: [
          { title: 'Two Arm Tricep Extension', reps: 12, sets: 3},
          { title: 'Bench Dips', reps: 12, sets: 3},
          { title: 'Overhead Cable Extension', reps: 12, sets: 3},
        ]
      },
      {
        name: 'Shoulders',
        items: [
          { title: 'Standing Dumbbell Fly', reps: 12, sets: 3},
          { title: 'Face Pull', reps: 12, sets: 3},
          { title: 'Trap Raise', reps: 12, sets: 3},
          { title: 'Single-Arm Cable Row', reps: 12, sets: 3},
          { title: 'Dumbbell Shrug', reps: 12, sets: 3},
          { title: 'Machine Shoulder Press', reps: 12, sets: 3},
          { title: 'Single-Arm Cable Front Raise', reps: 12, sets: 3},
        ]
      }
    ];
    this.workout = workouts[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
