import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";



const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'students', component: ContentListItemComponent},
  { path: 'students/:id', component: DeveloperDetailComponent },
  {path:'modify-student', component: ModifyDeveloperComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

