import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAvatar'
})
export class UserAvatarPipe implements PipeTransform {

  transform(avatar:string): string {
    if(!avatar){
      return "https://www.mecenavie.com/wp-content/uploads/2019/06/Capture%20d%E2%80%99%C3%A9cran%202019-06-15%20%C3%A0%2000.13.10-950x1024.png"
    }
    return avatar;
  }

}
