import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../../shared/shared.module';
import { FirstRoutingModule } from './first-routing.module';
import { IFirstSource } from './interefaces/first-source.interface';
import { FirstMockService } from './services/first.mock.service';
import { FirstSourceService } from './services/first.source.service';
import { FirstService } from './services/first.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    FirstComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FirstRoutingModule
  ],
  providers: [
    FirstService,
    {
      provide: IFirstSource,
      useClass: environment.mock ? FirstMockService : FirstSourceService
    },
  ]
})
export class FirstModule { }
