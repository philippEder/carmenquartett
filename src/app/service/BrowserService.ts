import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class BrowserService {
  
  private platformId = inject(PLATFORM_ID);
  static MOBILE_PIXEL_WIDTH = 1200;

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= BrowserService.MOBILE_PIXEL_WIDTH;
    }
    return false;
  }

  getInnerWidth(): number {
    
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth;
    }

    return 0;
  }
}