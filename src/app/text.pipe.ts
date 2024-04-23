import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(desc:string,limit:number): string {
    return desc.split(' ').slice(0,limit).join(' ')
  }

}
