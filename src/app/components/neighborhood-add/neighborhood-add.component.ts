import { Component, OnInit } from '@angular/core';
import { Neighbor } from 'src/app/interface/neighbor.model';
import { NeighborService } from 'src/app/services/neighbor/neighbor.service';
@Component({
  selector: 'app-neighborhood-add',
  templateUrl: './neighborhood-add.component.html',
  styleUrls: ['./neighborhood-add.component.css']
})
export class NeighborhoodAddComponent implements OnInit {
  hood: Neighbor = {
    name: '',
    location: '',
    description: '',
    police_number: 0,
    health_tell: 0,
    published: false
  };
  submitted = false;

  constructor(private hoodService: NeighborService) { }

  ngOnInit(): void {
  }
  saveNeighbor(): void {
    const data = {
      name: this.hood.name,
      location: this.hood.location,
      description: this.hood.description,
      police_number: this.hood.police_number,
      health_tell: this.hood.health_tell,
    };

    this.hoodService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newNeighbor() {
    this.submitted = false;
    this.hood = {
      name: '',
      location: '',
      description: '',
      police_number: 0,
      health_tell: 0,
      published: false
    };
  }
}



