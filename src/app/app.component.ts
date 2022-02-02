import { OurDownloadType } from './download-with-rxjs/model/our-download-type';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DownloadService } from './download-with-rxjs/download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fileName = 'Mobile Cross-Platform from a Progressive Perspective';
  url =
    'https://nils-mehlhorn.de/slides/mobile_cp_progessive_mehlhorn_pottjs.pdf';

  constructor(private downloadService: DownloadService) {}

  download$: Observable<OurDownloadType> | undefined;

  onDownload() {
    this.download$ = this.downloadService.downloadFile(this.url, this.fileName);
  }
}
