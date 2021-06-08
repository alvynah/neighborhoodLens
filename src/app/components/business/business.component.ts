import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/interface/business.model';
import { BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business?: Business[];
  currentBusiness?: Business;
  currentIndex = -1;
  title = '';

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.retrieveBusiness();
  }
  retrieveBusiness(): void {
    this.businessService.getAll()
      .subscribe(
        data => {
          this.business = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveBusiness();
    this.currentBusiness = undefined;
    this.currentIndex = -1;
  }

  setActiveBusiness(businesses: Business, index: number): void {
    this.currentBusiness = businesses;
    this.currentIndex = index;
  }

}

