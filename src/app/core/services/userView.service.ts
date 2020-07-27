import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';


import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import { User } from '../models/user';
import { USERS } from '../models/users';
import { SortDirection, SortColumn } from '../directives/sortable.directive';

interface SearchResult {
  users: User[];
  total: number;
}

interface UserName {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(users: User[], column: SortColumn, direction: string): User[] {
  if (direction === '' || column === '') {
    return users;
  } else {
    return [...users].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(user: User, term: string, pipe: PipeTransform) {
  return user.userName.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(user.email).includes(term)
    || pipe.transform(user.role).includes(term);
}

@Injectable({providedIn: 'root'})
export class UserViewService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _users$ = new BehaviorSubject<User[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _userName: UserName = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._users$.next(result.users);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get users$() { return this._users$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._userName.page; }
  get pageSize() { return this._userName.pageSize; }
  get searchTerm() { return this._userName.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<UserName>) {
    Object.assign(this._userName, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._userName;

    // 1. sort
    let users = sort(USERS, sortColumn, sortDirection);

    // 2. filter
    users = users.filter(user => matches(user, searchTerm, this.pipe));
    const total = users.length;

    // 3. paginate
    users = users.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({users, total});
  }

}