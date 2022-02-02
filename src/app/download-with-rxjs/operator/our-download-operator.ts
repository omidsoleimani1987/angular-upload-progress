import { OurDownloadType } from './../model/our-download-type';
import {
  HttpEvent,
  HttpEventType,
  HttpProgressEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { distinctUntilChanged, scan } from 'rxjs/operators';

export function ourDownloadOperator(
  saver?: (b: Blob) => void
): (source: Observable<HttpEvent<Blob>>) => Observable<OurDownloadType> {
  return (source: Observable<HttpEvent<Blob>>) =>
    source.pipe(
      scan(
        (download: OurDownloadType, event): OurDownloadType => {
          if (
            event.type === HttpEventType.DownloadProgress ||
            event.type === HttpEventType.UploadProgress
          ) {
            return {
              progress: event.total
                ? Math.round((100 * event.loaded) / event.total)
                : download.progress,
              state: 'IN_PROGRESS',
              content: null,
            };
          }
          if (event.type === HttpEventType.Response && event.body) {
            if (saver) {
              saver(event.body);
            }
            return {
              progress: 100,
              state: 'DONE',
              content: event.body,
            };
          }
          return download;
        },
        { state: 'PENDING', progress: 0, content: null }
      ),
      distinctUntilChanged(
        (a, b) =>
          a.state === b.state &&
          a.progress === b.progress &&
          a.content === b.content
      )
    );
}
