import { InjectionToken } from '@angular/core';
import { saveAs } from 'file-saver';

export type SaverPackageType = (blob: Blob, filename?: string) => void;

export const SAVER_PACKAGE_TOKEN = new InjectionToken<SaverPackageType>(
  'saver'
);

export function saverPackageFactory(): SaverPackageType {
  return saveAs;
}
