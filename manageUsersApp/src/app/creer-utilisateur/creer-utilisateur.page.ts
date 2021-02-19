import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-creer-utilisateur',
  templateUrl: './creer-utilisateur.page.html',
  styleUrls: ['./creer-utilisateur.page.scss'],
})
export class CreerUtilisateurPage implements OnInit {

  name: string;
  job: string;
  create$: Subscription;

  constructor(
    public router: Router,
    public apiService: ApiService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    console.log('CreerUtilisateurPage init');
  }

  ajouter() {
    this.create$ = this.apiService.create(this.name, this.job).subscribe(
      async createdAt => {
        
        const alert = await this.alertCtrl.create({
          header: 'Alert',
          message: 'Utilisateur créé avec succès le ' + createdAt,
          buttons: ['OK']
          });
          await alert.present();
          await this.router.navigateByUrl('home');
      }
    );
  }
}
