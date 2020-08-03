import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/_services/user.service';

@Component({
  selector: 'app-board-emp',
  templateUrl: './board-emp.component.html',
  styleUrls: ['./board-emp.component.css']
})
export class BoardEmpComponent implements OnInit {


  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getEmpBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
