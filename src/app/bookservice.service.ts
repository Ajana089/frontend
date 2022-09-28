import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(public http:HttpClient,public router:Router) { }

  newUser(user:any){

   
    return this.http.post("https://backendlibrary12345.herokuapp.com/books/addbook",user)
    .subscribe(data=>{alert(data)})

  }
  getBookId(id:any){
    return this.http.get("https://backendlibrary12345.herokuapp.com/books/"+id);
  }

  getBooks()
  {
    return this.http.get("https://backendlibrary12345.herokuapp.com/books/getbook");
  }

  deleteBook(id:any)
  {

    return this.http.delete("https://backendlibrary12345.herokuapp.com/books/remove/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("https://backendlibrary12345.herokuapp.com/books/update",book)
    .subscribe(data =>{console.log(data)})
  }
 
}
