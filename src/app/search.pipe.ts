import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(usersList:any[],term:string): any[] {
    return usersList.filter((item)=>item.firstName.includes(term))
  }

}
