import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstRoutes } from './first.routes';

@NgModule({
  imports: [RouterModule.forChild(FirstRoutes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
