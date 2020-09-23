import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MylocationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MylocationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class MylocationHomeModule {}
