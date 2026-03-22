import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class BrowserService {
  
  private platformId = inject(PLATFORM_ID);
  /** Narrow layout: burger menu, read-more clamps (matches CSS ~1200px). */
  static NARROW_MAX_WIDTH = 1200;
  /** Phone-sized: stacked hero tweaks, feste section without background image. */
  static PHONE_MAX_WIDTH = 768;

  /** Phones and tablets (max width 1200px). False on desktop — e.g. Mehr/Weniger toggle. */
  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= BrowserService.NARROW_MAX_WIDTH;
    }
    return false;
  }

  isPhone(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= BrowserService.PHONE_MAX_WIDTH;
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