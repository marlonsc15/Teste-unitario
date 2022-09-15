import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {
      name: "Itau",
      value: 100
    },
    {
      name: "Bradesco",
      value: 100
    },
    {
      name: "Caixa",
      value: 100
    },
    {
      name: "Banco do Brasil",
      value: 100
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
