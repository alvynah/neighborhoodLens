import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/interface/business.model';
import { BusinessService } from 'src/app/services/business/business.service';
@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {
  currentBusiness: Business = {
    name: '',
    description: '',
    email: '',
    neighborhood: '',
    user: '',
    published: false
  };
  message = '';

  constructor(
    private businessService: BusinessService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBusiness(this.route.snapshot.paramMap.get('id'));
  }

  getBusiness(id: string | null) {
    this.businessService.get(id)
      .subscribe(
        data => {
          this.currentBusiness = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      name: this.currentBusiness.name,
      description: this.currentBusiness.description,
      email: this.currentBusiness.email,
      user: this.currentBusiness.user,
      neighborhood: this.currentBusiness.neighborhood,
      published: status
    };

    this.businessService.update(this.currentBusiness.id, data)
      .subscribe(
        response => {
          this.currentBusiness.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateBusiness(): void {
    this.businessService.update(this.currentBusiness.id, this.currentBusiness)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/business']);


        },
        error => {
          console.log(error);
        });
  }

  deleteBusiness(): void {
    this.businessService.delete(this.currentBusiness.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/business']);
        },
        error => {
          console.log(error);
        });
  }

}
