import { Component, OnInit } from '@angular/core';
import { TransactionService } from './service/transaction.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
data:any;
  constructor(private service:TransactionService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.service.get()
      .subscribe(res => {
        this.data = res.stocks;
      })
      }    }
