import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Utilisateur } from 'src/app/home/utilisateurs/utilisateur.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listeUtilisateurs$: Observable<any>;

  constructor(
    public router: Router,
    public apiService: ApiService
  ) {}

  async selectedUser(id: number) {
    await this.router.navigate(['details-utilisateur', id]);
  }

  ngOnInit(): void {
    this.listeUtilisateurs$ = this.apiService.getUserList();
  }

}
