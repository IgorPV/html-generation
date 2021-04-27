import { Component, OnInit } from '@angular/core';
import { faUserEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;
}
