import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpClientModule } from '@angular/common/http'

interface MongoItem {
  name: string
}

@Injectable()
export class MongoItemService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<MongoItem[]> {
    return this.http.get<MongoItem[]>('http://localhost:1234/products/list')
  }

  // TODO replace name with id
  getItem(name: string): Observable<MongoItem> {
    return this.http.get<MongoItem>('http://localhost:1234/products/:id' + name)
  }

  // TODO change parameter
  insertItem(item: MongoItem): Observable<MongoItem> {
    return this.http.post<MongoItem>('http://localhost:1234/products/create', item)
  }

  updateItem(item: MongoItem): Observable<void> {
    return this.http.put<void>(
      'http://localhost:1234/products/update' + item.name,
      item
    )
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name)
  }
}