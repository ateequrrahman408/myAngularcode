import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Products } from './services/products';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Welcom To Angular');

name=new FormControl()
email=new FormControl()
phone=new FormControl()
  constructor(private http: HttpClient, private Products:Products) {}
info(){

  const data = {   // ✅ data object define karo
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    };
  // console.log(this.name.value,this.email.value,this.phone.value)
  this.http.post('http://localhost:3000/register',data)
      .subscribe({
        next: (res) => {
          console.log(data)
          alert('Data saved successfully');
            
        },
        error:(err)=>{
          console.error(err);
          alert('Error saving data');
        }  
      })

}
reset(){
  this.name.setValue('')
  this.email.setValue('')
  this.phone.setValue('')
}

// 2nd api

// productlist:any
// ngOnInit(){
//   this.Products.getproductlist().subscribe({
//     next: (res) => {
//       console.log('API Data:', res);
//        this.productlist = res; 
//     },
//      error: (err) => {
//       console.error('Error:', err);
//     }
//   })
// }

}
