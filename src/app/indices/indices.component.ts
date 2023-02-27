import { Component, OnInit } from '@angular/core';
import { IndicesServices } from './services/indices.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {

  data:any;
  constructor(private service:IndicesServices) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.service.get()
      .subscribe(res => {
        this.data = res.stock;
      })
  }

}
