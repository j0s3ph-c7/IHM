import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details-utilisateur',
  templateUrl: './details-utilisateur.page.html',
  styleUrls: ['./details-utilisateur.page.scss'],
})
export class DetailsUtilisateurPage implements OnInit {
  private selectedUserId: number;

  detailsUtilisateur$: Observable<any>;

  constructor(
    public apiService: ApiService,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedUserId = this.actRoute.snapshot.params.id;
    this.detailsUtilisateur$ = this.apiService.getUserDetail(this.selectedUserId);
  }

}
