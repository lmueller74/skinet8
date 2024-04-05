import { HttpClient } from '@angular/common/http';
import { Component, EnvironmentInjector } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;
validationErrors: string[] = [];
  constructor(private http: HttpClient ) {}

  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe({
      next: r => console.log(r),
      error: r => console.log(r)
    })
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe({
      next: r => console.log(r),
      error: r => console.log(r)
    })
  }
  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: r => console.log(r),
      error: r => console.log(r)
    })
  }
  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/badrequestasdasd').subscribe({
      next: r => console.log(r),
      error: r => {
        console.log(r);
        this.validationErrors = r.errors;
      } 
    })
  }
}
