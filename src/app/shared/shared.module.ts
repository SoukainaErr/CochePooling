import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component"
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const SHARED_COMPONENTS=[
  LayoutComponent,
  NavBarComponent
]

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SHARED_COMPONENTS]
})
export class SharedModule { }
