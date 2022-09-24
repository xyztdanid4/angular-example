import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondRoutes } from './second.routes';

@NgModule({
  imports: [RouterModule.forChild(SecondRoutes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
