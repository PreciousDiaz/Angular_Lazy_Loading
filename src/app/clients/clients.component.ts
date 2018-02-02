import { Component } from '@angular/core';

import { MENU_ITEMS } from './clients-menu';

@Component({
  selector: 'ngx-clients',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class ClientsComponent {

  menu = MENU_ITEMS;
}
