import { Api } from './../../models/api';
import { ApiService } from './../../api.service';
import { Customer } from './../../models/customer';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  filteredStatus = '';

  customers: Customer[] = [];
  customersSub: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.customersSub = this.apiService.customersSub.subscribe(response => {
      this.customers = response;
    })
  }

  filterChange() {
    console.log(this.filteredStatus);
    let customers = new Api().customers;
    customers = customers.filter(customer => {
      customer.name.toLowerCase().startsWith(this.filteredStatus.toLowerCase())
    })
    this.apiService.updateCustomer(customers);
  }

  ngOnDestroy(): void {
    this.customersSub.unsubscribe();
  }




}
