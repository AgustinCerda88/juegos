import { ExchangesService } from './../exchanges.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {

  exchanges: any=[];
  cambio: any= null;
  selectedExchange = 'EUR';
  date: any;
  
  
  constructor( private requestexchanges: ExchangesService){}
  
  ngOnInit(): void {
    this.requestexchanges.getExchanges().subscribe((res: any) => {
      this.date = res.date;
      for (const key in res.rates) {
        this.exchanges.push({ name: key, value: res.rates[key] });
      }
    });
  }


  onSelectChange(event: any) {
    const base = (event.target as HTMLSelectElement).value;
    this.requestexchanges.getOtherEx(base).subscribe((res:any) =>{
      this.exchanges = [];
      for (const key in res.rates) {
        this.exchanges.push({ name: key, value: res.rates[key] })
      }
    })
  }

}

  
