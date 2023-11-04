import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';
import { ViveroService } from '../vivero.service';

@Component({
  selector: 'app-vivero-list',
  templateUrl: './vivero-list.component.html',
  styleUrls: ['./vivero-list.component.css']
})
export class ViveroListComponent implements OnInit {

  plantas: Array<Plants> = []

  constructor(private viveroService: ViveroService) { }

  getPlants(): void {
    this.viveroService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;
    })
  }

  ngOnInit() {
    this.getPlants();
  }

}
