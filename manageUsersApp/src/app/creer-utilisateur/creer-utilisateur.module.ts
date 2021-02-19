import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerUtilisateurPageRoutingModule } from './creer-utilisateur-routing.module';

import { CreerUtilisateurPage } from './creer-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerUtilisateurPageRoutingModule
  ],
  declarations: [CreerUtilisateurPage]
})
export class CreerUtilisateurPageModule {}
