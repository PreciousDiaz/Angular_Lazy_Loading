import { NgModule } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const CLIENTS_COMPONENTS = [
  ClientsComponent,
];

@NgModule({
  imports: [
    ClientsRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...ClIENTS_COMPONENTS,
  ],
})
export class ClientsModule {
}
