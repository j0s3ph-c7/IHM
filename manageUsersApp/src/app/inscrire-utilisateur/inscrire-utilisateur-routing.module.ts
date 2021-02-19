import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscrireUtilisateurPage } from './inscrire-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: InscrireUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscrireUtilisateurPageRoutingModule {}
