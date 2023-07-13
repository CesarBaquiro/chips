import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/data';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  list: Products[] = products;
  title: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.title = params['title']));
  }
}
