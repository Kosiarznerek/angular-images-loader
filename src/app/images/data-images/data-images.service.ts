import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IImageDetails} from './data-images.service.models';

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

    // Return data
    return this.httpClient.get<IImageDetails[]>(
      `https://jsonplaceholder.typicode.com/albums/1/photos?_limit=${limit}`
    );

  }

}
