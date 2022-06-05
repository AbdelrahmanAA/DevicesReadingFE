import { Component, OnInit, Input  } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  
    
  constructor(private api: ApiService) { }
  dataSource!: MatTableDataSource<any[]>;
  ngOnInit() {
    this.api.getAllDevicesList().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.responseData.deviceDTOList);
    });
  }
  displayedColumns = ["deviceId", "lastTemperature"];
  

}
