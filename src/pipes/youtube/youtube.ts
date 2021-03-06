import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer){

  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    console.log(this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+value));
    return this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+value);
    //return value.toLowerCase();
  }
}
