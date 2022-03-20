import { SortDirection } from '@angular/material/sort';
export class PageAndSortFilter {
  public pageIndex: number;
  public pageSize: number;
  public pageSort: string;
  public sortDirection: String;

  constructor(pageIndex, pageSize, pageSort, sortDirection) {
    (this.pageIndex = pageIndex),
      (this.pageSize = pageSize),
      (this.pageSort = pageSort),
      (this.sortDirection = sortDirection);
  }
}
