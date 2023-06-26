import { Injectable } from '@angular/core';
import { PersonnelInfo } from './personnelInfo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data = new BehaviorSubject<PersonnelInfo[]>(
    [
      {name: 'James', email: 'james@gmail.com', phone: '8583453234', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores incidunt reiciendis accusamus modi temporibus ut doloremque facere aut ipsum.'},
      {name: 'Clara', email: 'clara@gmail.com', phone: '9983423854', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores incidunt reiciendis accusamus modi temporibus ut doloremque facere aut ipsum.'},
      {name: 'Wayne', email: 'wayne@gmail.com', phone: '4348273323', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores incidunt reiciendis accusamus modi temporibus ut doloremque facere aut ipsum.'},
      {name: 'Maya', email: 'maya@gmail.com', phone: '9920558566', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores incidunt reiciendis accusamus modi temporibus ut doloremque facere aut ipsum.'},
    ]
  )

  constructor() { }

  get data() {
    return this._data.asObservable();
  }

  set changedData(dataTable: PersonnelInfo[]) {
    this._data.next(dataTable)
  }

  deleteRow(row: PersonnelInfo) {

    let dataFloat: PersonnelInfo[] = this._data.value;

    dataFloat.splice(dataFloat.indexOf(row), 1);

    this._data.next(dataFloat);

  }

  addRow(row: PersonnelInfo) {

    let dataFloat: PersonnelInfo[] = this._data.value;

    dataFloat.push(row);

    this._data.next(dataFloat);
  }

}
