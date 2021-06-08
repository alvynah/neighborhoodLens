import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {
  business = {
    name: '',
    description: '',
    email: '',
    neighborhood: '',
    user: '',
    published: false
  };
  submitted = false;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
  }
  saveBusiness() {
    const data = {
      name: this.business.name,
      description: this.business.description,
      email: this.business.email,
      neighborhood: this.business.neighborhood,
      user: this.business.user
    };

    this.businessService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBusiness() {
    this.submitted = false;
    this.business = {
      name: '',
      description: '',
      email: '',
      neighborhood: '',
      user: '',
      published: false
    };
  }
}

