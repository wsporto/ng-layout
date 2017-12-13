import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [],
})
export class LayoutModule { }
