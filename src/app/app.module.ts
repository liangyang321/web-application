import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AirPortComponent } from './air-port/air-port.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path: 'airport', component: AirPortComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/airport', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AirPortComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
