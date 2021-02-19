import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsUtilisateurPage } from './details-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsUtilisateurPageRoutingModule {}
