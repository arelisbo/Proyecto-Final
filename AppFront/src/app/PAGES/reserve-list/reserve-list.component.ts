import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../Servicios/reserve.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Reserve } from '../../models/reservamodels';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reserve-list',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './reserve-list.component.html',
  styleUrl: './reserve-list.component.css'
})
export class ReserveListComponent implements OnInit {

  reservas:Reserve[] = []
  reserve: any;
  
  _id:any

  constructor(private reservesService:ReservesService){}

  // onClick (_id:Reserve) {
  //   this.reservesService.deleteReserve().subscribe({})
  // }

  ngOnInit(){
    this.reservesService.getReserveList().subscribe({
      next:(Reserve)=> {
        this.reservas = Reserve
      },
      error:(error)=> {
        console.log(error)
      }
    })
  }
}
