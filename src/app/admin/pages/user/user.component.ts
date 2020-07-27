import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DecimalPipe} from '@angular/common';
import {QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';


import { HttpClientService } from 'src/app/core/services/http-client.service';
import { User } from 'src/app/core/models/user';

import { NgbdSortableHeader, SortEvent } from 'src/app/core/directives/sortable.directive';
import { UserViewService } from 'src/app/core';
import { RestAPIService } from 'src/app/core/services/RestAPIService';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserComponent, DecimalPipe]})
  
export class UserComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;
  action: string;
  ItemsArray = [];

  users$: Observable<User[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public service: UserViewService) {
      this.users$ = service.users$;
      this.total$ = service.total$;
     }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedUserId = params['id'];
        if (selectedUserId) {
          this.selectedUser = this.users.find(user => user.id === +selectedUserId);
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  viewUser(id: number) {
    this.router.navigate(['admin','users'], {queryParams : {id, action: 'view'}});
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  }
  

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  
}
