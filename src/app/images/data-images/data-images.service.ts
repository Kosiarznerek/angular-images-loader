import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IImageDetails} from './data-images.service.models';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataImagesService {

  /**
   * Constructor
   */
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  /**
   * Gets images from api
   * @param limit Limit of images to get
   */
  public getImages(limit: number): Observable<IImageDetails[]> {

    // // Return data
    // return this.httpClient.get<IImageDetails[]>(
    //   `https://jsonplaceholder.typicode.com/albums/1/photos?_limit=${limit}`
    // );

    // Test mocked data
    return of(new Array(limit).fill(0).map((v, i) => ({
      albumId: Math.floor(Math.random() * 10),
      id: i + 1,
      title: `Image ${i}`,
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    }))).pipe(delay(3_000));

  }

}
