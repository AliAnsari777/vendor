// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../service/user-service.service'
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
 
  users: User;
 
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService) {

      this.users = new User();
}
 
  ngOnInit() {
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });
  }

  onReject() {
    this.userService.save(this.users).subscribe(result => this.gotoUserList());
  }

  onApprove() {
    this.userService.save(this.users).subscribe(result => this.gotoUserList());
  }
  
  gotoUserList() {
    this.router.navigate(['/validation']);
  }
}
