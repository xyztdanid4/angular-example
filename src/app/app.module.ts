import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FirstRouterComponent } from './modules/firstModule/first.router';
import { SecondRouterComponent } from './modules/secondModule/second.router';
import { AppRouterComponent } from './app.router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { firstReducer } from './modules/firstModule/reducers/first.reducer';

@NgModule({
  declarations: [
    AppRouterComponent,
    FirstRouterComponent,
    SecondRouterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({ first: firstReducer })
  ],
  providers: [],
  bootstrap: [AppRouterComponent]
})
export class AppModule { }
