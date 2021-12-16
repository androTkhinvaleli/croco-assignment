import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'objectEntries' })
export class ObjectEntriesPipe implements PipeTransform {
  transform(object: {[x: string]: any }) {
    let arr: any[] = [];
    for (const [key, value] of Object.entries(object)) {
        arr.push({
            key,
            value,
            isNested: typeof value === 'object',
        });
    }  
    return arr;
  }
}