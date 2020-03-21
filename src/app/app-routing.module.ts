import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImagesComponent} from './images/images.component';
import {UnknownRouteComponent} from './unknown-route/unknown-route.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'images'},
  {path: 'images', component: ImagesComponent},
  {path: 'unknown-route', component: UnknownRouteComponent},
  {path: '**', redirectTo: 'unknown-route'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
