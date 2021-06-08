import { Component, OnInit } from '@angular/core';
import { Neighbor } from 'src/app/interface/neighbor.model';
import { NeighborService } from 'src/app/services/neighbor/neighbor.service'
@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent implements OnInit {

  neighbor?: Neighbor[];
  currentHood?: Neighbor;
  currentIndex = -1;
  title = '';

  constructor(private neighborService: NeighborService) { }

  ngOnInit(): void {
    this.retrieveNeighbor();
  }
  retrieveNeighbor(): void {
    this.neighborService.getAll()
      .subscribe(
        data => {
          this.neighbor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveNeighbor();
    this.currentHood = undefined;
    this.currentIndex = -1;
  }

  setActiveNeighbor(neighbor: Neighbor, index: number): void {
    this.currentHood = neighbor;
    this.currentIndex = index;
  }

}


