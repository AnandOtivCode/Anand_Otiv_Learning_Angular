import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'developer', component: ContentListComponent},
  { path: 'developers/:id', component: ContentListItemComponent },
  {path:'modify-developer', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

