import { OurDownloadType } from './model/our-download-type';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SaverPackageType,
  SAVER_PACKAGE_TOKEN,
} from './provider/saver.provider';
import { ourDownloadOperator } from './operator/our-download-operator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(
    private http: HttpClient,
    @Inject(SAVER_PACKAGE_TOKEN) private saverPackage: SaverPackageType
  ) {}

  downloadFile(url: string, fileName: string): Observable<OurDownloadType> {
    return this.http
      .get(url, {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob',
      })
      .pipe(ourDownloadOperator((blob) => this.saverPackage(blob, fileName)));
  }
}
