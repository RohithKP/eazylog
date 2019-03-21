import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'replaceURL'})
export class ReplaceURL implements PipeTransform {
  transform(value: string): string {
    return value.replace(/ /g, '-');
  }
}