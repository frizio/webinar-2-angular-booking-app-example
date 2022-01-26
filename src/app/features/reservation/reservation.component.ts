import { Component } from '@angular/core';

@Component({
  selector: 'fb-reservation',
  template: `
    <mat-drawer-container class="view">
      <mat-drawer mode="side" opened class="side-panel">      <!--left col-->
        <fb-reservation-list></fb-reservation-list>             <!--Site List-->
      </mat-drawer>
      <mat-drawer-content>                                    <!--right col-->
        <fb-reservation-map></fb-reservation-map>               <!--Map-->
                                                                <!--Modal Example-->
        <!--
        <div style="width: 400px">
          <fb-reservation-modal></fb-reservation-modal>
        </div>
        -->
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
    .view {
      width: 100%;
      height: 100vh;
      margin: 0
    }

    .side-panel {
      min-width: 250px;
    }
  `]
})
export class ReservationComponent {

}
