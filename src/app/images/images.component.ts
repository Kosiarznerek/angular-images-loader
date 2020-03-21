import {Component, OnInit} from '@angular/core';
import {DataImagesService} from './data-images/data-images.service';
import {Observable, of} from 'rxjs';
import {IImageDetails} from './data-images/data-images.service.models';
import {catchError, delay, shareReplay} from 'rxjs/operators';

@Component({
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  // Component data
  public imagesDetails$: Observable<IImageDetails[]>;

  /**
   * Constructor
   */
  constructor(
    private readonly dataImagesService: DataImagesService,
  ) {
  }

  /**
   * NgOnInit
   */
  public ngOnInit(): void {

    // Getting images data
    this.imagesDetails$ = this.dataImagesService.getImages(1).pipe(
      delay(Math.random() * 3_000), // delay to be able to see loading
      shareReplay(),
      catchError(() => of(undefined)),
    );

  }

}
