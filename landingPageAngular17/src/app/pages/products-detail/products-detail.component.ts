import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{
  loading: boolean = true;
  public product?: IProducto;
  
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

ngOnInit(): void {
  this._route.params.subscribe(params => {
    this._apiService.getProduct(params['id']).subscribe((data: IProducto[]) =>{
    this.product = data[0];
      this.loading = false;
    });
  });
}
}
