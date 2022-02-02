export interface OurDownloadType {
  content: Blob | null;
  progress: number;
  state: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}
