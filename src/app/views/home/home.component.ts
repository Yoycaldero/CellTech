import { Component } from '@angular/core';
import { Products } from 'src/app/models/product.modul';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:Products[]=[

  ]

  constructor(private data: ConnectionService){
    this.data.getProducts().subscribe(result => this.products= result)
  }

}
