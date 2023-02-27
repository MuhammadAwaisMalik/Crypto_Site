import { Component, OnInit } from '@angular/core';
import { ForexService } from './services/forex.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  data:any;
  constructor(private service:ForexService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.service.get()
      .subscribe(res => {
        this.data = res.data;
      })
  }

}
