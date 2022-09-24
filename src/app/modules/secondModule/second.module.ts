import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './components/second/second.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondRoutingModule } from './second-routing.module';

@NgModule({
  declarations: [
    SecondComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecondRoutingModule,
  ]
})
export class SecondModule { }
