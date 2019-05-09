import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpClientModule } from '@angular/common/http'

interface MongoItem {
  name: string
}

@Injectable()
export class MongoItemService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<MongoItem[]> {
    return this.http.get<MongoItem[]>('http://localhost:1234/products/list')
  }

  // TODO replace name with id
  getProduct(name: string): Observable<MongoItem> {
    return this.http.get<MongoItem>('http://localhost:1234/products/:id' + name)
  }

  // TODO change parameter
  insertProduct(product: MongoItem): Observable<MongoItem> {
    return this.http.post<MongoItem>('http://localhost:1234/products/create', product)
  }

  updateProduct(product: MongoItem): Observable<void> {
    return this.http.put<void>(
      'http://localhost:1234/products/update' + product.name,
      product
    )
  }

  deleteProduct(name: string) {
    return this.http.delete('http://localhost:1234/products/' + name)
  }

  getAllSource(): Observable<MongoItem[]> {
    return this.http.get<MongoItem[]>('http://localhost:1234/sources/list')
  }

  getSource(id: string): Observable<MongoItem> {
    return this.http.get<MongoItem>('http://localhost:1234/sources/' + id)
  }

}