import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsUtilisateurPageRoutingModule } from './details-utilisateur-routing.module';

import { DetailsUtilisateurPage } from './details-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsUtilisateurPageRoutingModule
  ],
  declarations: [DetailsUtilisateurPage]
})
export class DetailsUtilisateurPageModule {}
