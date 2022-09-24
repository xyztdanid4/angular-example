import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SharedInputComponent } from './components/shared-input/shared-input.component';

@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedInputComponent
  ],
  exports: [
    SharedButtonComponent,
    SharedInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
