import { Component, OnInit } from '@angular/core';
import { Neighbor } from 'src/app/interface/neighbor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NeighborService } from 'src/app/services/neighbor/neighbor.service';

@Component({
  selector: 'app-neighborhood-details',
  templateUrl: './neighborhood-details.component.html',
  styleUrls: ['./neighborhood-details.component.css']
})
export class NeighborhoodDetailsComponent implements OnInit {
  currentHood: Neighbor = {
    name: '',
    location: '',
    description: '',
    police_number: 0,
    health_tell: 0,
    published: false
  };
  message = '';

  constructor(private hoodService: NeighborService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getNeighbor(this.route.snapshot.paramMap.get('id'));
  }

  getNeighbor(id: string | null) {
    this.hoodService.get(id)
      .subscribe(
        data => {
          this.currentHood = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      name: this.currentHood.name,
      description: this.currentHood.description,
      location: this.currentHood.location,
      police_number: this.currentHood.police_number,
      health_tell: this.currentHood.police_number,
      published: status
    };

    this.hoodService.update(this.currentHood.id, data)
      .subscribe(
        response => {
          this.currentHood.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateNeighbor(): void {
    this.hoodService.update(this.currentHood.id, this.currentHood)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/neighborhood']);

        },
        error => {
          console.log(error);
        });
  }

  deleteNeighbor(): void {
    this.hoodService.delete(this.currentHood.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/neighborhood']);
        },
        error => {
          console.log(error);
        });
  }

}
