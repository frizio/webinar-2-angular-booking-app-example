import { Component } from '@angular/core';

@Component({
  selector: 'fb-reservation-modal',
  template: `
    <h2 mat-dialog-title>Book an appointment </h2>
    <mat-dialog-content class="mat-typography" style="min-height: 450px">
      <mat-tab-group >
        <mat-tab label="Date">                <!--Date picker-->
          <mat-calendar></mat-calendar>
        </mat-tab>
        <mat-tab label="Time">                <!--Time Picker-->
          <mat-list>
            <!--List of available times-->
            <mat-list-item mat-ripple>
              <mat-icon>timer</mat-icon> HOUR 1
              <mat-divider></mat-divider>
            </mat-list-item>
            <mat-list-item mat-ripple>
              <mat-icon>timer</mat-icon> HOUR 2
              <mat-divider></mat-divider>
            </mat-list-item>
          </mat-list>
        </mat-tab>
      </mat-tab-group>
    </mat-dialog-content>
  `,
})
export class ReservationModalComponent {


  constructor( ) {

  }

}
