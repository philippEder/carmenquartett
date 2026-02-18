import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { MoreLessComponent } from './common/more-less-button/more-less-button.component';
import { BurgerComponent } from './burger/burger.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'repertoire', component: RepertoireComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RepertoireComponent,
    ContactComponent,
    HeaderComponent,
    ConcertsComponent,
    MoreLessComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
