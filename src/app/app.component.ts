import { Component, OnInit } from '@angular/core';
import { EmployeedataService } from './services/employeedata.service';

interface Department {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'APIServices';

  employee: any;
  department: Department[] | undefined;
  selectedDepartment: Department | undefined;

  constructor(private employeedata: EmployeedataService) {}

  ngOnInit() {
    this.employeedata.getEmployee().subscribe((data) => {
      console.log(data);
      this.employee = data;
    });

    // this.department = [
    //   { name: 'Building Construction Department' },
    //   { name: 'Agriculture Department' },
    //   { name: 'Education Department' },
    //   { name: 'Forest Department' },
    //   { name: 'Energy Department' },
    // ];
  }

  saveEmployeeData(data: any) {
    this.employeedata.saveEmployee(data).subscribe((result) => {
      console.log(data);
    });
  }
}
