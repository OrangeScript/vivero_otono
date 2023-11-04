import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';
import { ViveroService } from '../vivero.service';

@Component({
  selector: 'app-vivero-list',
  templateUrl: './vivero-list.component.html',
  styleUrls: ['./vivero-list.component.css']
})
export class ViveroListComponent implements OnInit {

  plantas: Array<Plants> = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private viveroService: ViveroService) { }

  getPlants(): void {
    this.viveroService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;
    })
  }

  getTotals(): void {
    this.viveroService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;

      for (const plantasInterior of plantas) {
        if (plantasInterior.tipo === 'Interior') this.totalInterior++;
      }

      for (const plantasExterior of plantas) {
        if (plantasExterior.tipo === 'Exterior') this.totalExterior++;
      }

    })
  }

  ngOnInit() {
    this.getPlants();
    this.getTotals();
  }

}
