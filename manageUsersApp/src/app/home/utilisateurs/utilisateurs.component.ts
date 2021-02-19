import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilisateursComponent implements OnInit {

  @Input()
  listeUtilisateurs: any;

  @Output()
  selectedUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
