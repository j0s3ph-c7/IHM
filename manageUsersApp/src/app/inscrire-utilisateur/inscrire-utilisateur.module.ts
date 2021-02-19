import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscrireUtilisateurPageRoutingModule } from './inscrire-utilisateur-routing.module';

import { InscrireUtilisateurPage } from './inscrire-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscrireUtilisateurPageRoutingModule
  ],
  declarations: [InscrireUtilisateurPage]
})
export class InscrireUtilisateurPageModule {}
