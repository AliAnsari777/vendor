import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../../../vendor';
import { UserService } from '../../../service/user-service.service';
 
@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})

export class vendorManagementComponent {
 // roles = [ 'Data Entry', 'Data Analyst', 'Product Owner' ];
 
  vendor: Vendor;
 
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private userService: UserService) {
    
                this.vendor = new Vendor();
  }
 
  onSubmit() {
    this.userService.save(this.vendor).subscribe(result => this.gotoUserList());
  }

  
  gotoUserList() {
    this.router.navigate(['/validation']);
  }
}