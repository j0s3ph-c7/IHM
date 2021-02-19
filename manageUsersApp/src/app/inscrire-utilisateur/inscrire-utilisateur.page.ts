import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inscrire-utilisateur',
  templateUrl: './inscrire-utilisateur.page.html',
  styleUrls: ['./inscrire-utilisateur.page.scss'],
})
export class InscrireUtilisateurPage implements OnInit {

  email: string;
  password: string;
  register$: Subscription;

  constructor(
    public router: Router,
    public apiService: ApiService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    console.log('CreerUtilisateurPage init');
  }

  inscrire() {
    this.register$ = this.apiService.register(this.email, this.password).subscribe(
      async isRegistered => {
        if (isRegistered) {
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: 'Utilisateur créé, vous pouvez vous connecter',
            buttons: ['OK']
          });
          await alert.present();
          await this.router.navigateByUrl('login');
        }
        else{
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: 'Une erreur est produite, veuillez vous recommencer',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    );
  }
}
