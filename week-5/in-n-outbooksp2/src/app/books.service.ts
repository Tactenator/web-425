import { Injectable } from '@angular/core';
import { IBook } from './book.interface'
import { Observable, of, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook> = []
  constructor() {
    this.books = [{
      "isbn": "0-385-31208-3",
      "title": "Slaughterhouse Give",
      "authors": ["Kurt Vonnegut"],
      "description": "is a 1969 semi-autobiographic science fiction-infused anti-war novel by Kurt Vonnegut. It follows the life and experiences of Billy Pilgrim, from his early years, to his time as an American soldier and chaplain's assistant during World War II, to the post-war years, with Billy occasionally traveling through time. The text centers on Billy's capture by the German Army and his survival of the Allied firebombing of Dresden as a prisoner of war, an experience which Vonnegut himself lived through as an American serviceman. The work has been called an example of unmatched moral clarity and one of the most enduring anti-war novels of all time",
      "numOfPages": 190
    },
    {
      "isbn": "	0-671-12805-1",
      "title": "Catch-22",
      "authors": ["Joseph Heller"],
      "description": "Catch-22 is a satirical war novel by American author Joseph Heller. The novel is set during World War II, from 1942 to 1944. It mainly follows the life of antihero Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier. Most of the events in the book occur while the fictional 256th US Army Air Squadron is based on the island of Pianosa, in the Mediterranean Sea west of the Italian mainland, although it also includes episodes from basic training at Lowry Field in Colorado and Air Corps training at Santa Ana Army Air Base in California. The novel examines the absurdity of war and military life through the experiences of Yossarian and his cohorts, who attempt to maintain their sanity while fulfilling their service requirements so that they may return home. ",
      "numOfPages": 453
    },
    {
      "isbn": "1-4000-4339-5 ",
      "title": "Never Let Me Go",
      "authors": ["Kazugo Ishiguro"],
      "description": "Never Let Me Go, Ishiguro’s sixth novel, takes place in an alternate reality of England during the 1990s in which human cloning is authorized and performed.",
      "numOfPages": 288
    },
    {
      "isbn": "978-0-446-36538-3",
      "title": "Gone with the Wind",
      "authors": ["Margaret Mitchell"],
      "description": "Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Sherman's destructive March to the Sea",
      "numOfPages": 1037
    },
    {
      "isbn": "	978-0-434-09800-2",
      "title": "Clockwork Orange",
      "authors": ["Anthony Burgess"],
      "description": "A Clockwork Orange is a dystopian satirical black comedy novel by English writer Anthony Burgess, published in 1962. It is set in a near-future society that has a youth subculture of extreme violence. The teenage protagonist, Alex, narrates his violent exploits and his experiences with state authorities intent on reforming him.",
      "numOfPages": 192
    }]

  }
  getBooks(): Observable<IBook[]> {
    return of(this.books)
  }

  getBook(isbn: string) {
    for(let book of this.books) {
      if(book.isbn === isbn) {
        return book
      }
    }
    return {} as IBook;
  }
}
