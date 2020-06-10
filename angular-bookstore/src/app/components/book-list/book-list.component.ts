import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  books :any = [];

  listBooks(){
    this._bookService.getBooks().subscribe(
      (data)=>{
        this.books=data
      }
    );
  }
}
