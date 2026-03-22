import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserService } from '../../service/BrowserService';

@Component({
  selector: 'app-more-less',
  templateUrl: './more-less-button.component.html',
  styleUrls: ['./more-less-button.component.css'],
  standalone: false,
})
export class MoreLessComponent implements OnInit, AfterViewInit {
  @Input() targetId!: string;
  @Input() maxLines: number = 3;

  expanded = false;

  /** True when line-clamp would hide part of the copy. */
  textTruncated = false;

  /** True on phones/tablets (max width 1200px); false on desktop. */
  isMobile = false;

  private targetEl: HTMLElement | null = null;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly browserService = inject(BrowserService);

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.checkWidth();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    requestAnimationFrame(() => {
      this.apply();
      this.cdr.detectChanges();
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkWidth();
    this.apply();
    this.cdr.detectChanges();
  }

  apply(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.checkWidth();

    if (!this.targetEl) {
      this.targetEl = document.getElementById(this.targetId);
    }

    if (!this.isMobile) {
      if (this.targetEl) {
        this.applyClamp(false);
      }
      this.textTruncated = false;
      this.expanded = false;
      return;
    }

    if (!this.targetEl) {
      return;
    }

    // With -webkit-line-clamp, scrollHeight often equals the visible box — compare
    // full layout height (clamp off) to the clamped box height instead.
    this.textTruncated = this.measureTruncation();

    if (!this.expanded) {
      this.applyClamp(true);
    } else {
      this.applyClamp(false);
    }
  }

  /**
   * Returns true if applying line-clamp makes the box shorter than the natural text height.
   */
  private measureTruncation(): boolean {
    if (!this.targetEl) {
      return false;
    }
    this.applyClamp(false);
    const natural = this.targetEl.scrollHeight;
    this.applyClamp(true);
    const clamped = this.targetEl.getBoundingClientRect().height;
    return natural > clamped + 2;
  }

  private checkWidth(): void {
    this.isMobile = this.browserService.isMobile();
  }

  toggle(): void {
    this.expanded = !this.expanded;
    this.applyClamp(!this.expanded);
    this.cdr.detectChanges();
  }

  private applyClamp(apply: boolean): void {
    if (!this.targetEl) {
      return;
    }
    if (apply) {
      this.renderer.setStyle(this.targetEl, 'display', '-webkit-box');
      this.renderer.setStyle(this.targetEl, '-webkit-line-clamp', this.maxLines.toString());
      this.renderer.setStyle(this.targetEl, '-webkit-box-orient', 'vertical');
      this.renderer.setStyle(this.targetEl, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(this.targetEl, 'display');
      this.renderer.removeStyle(this.targetEl, '-webkit-line-clamp');
      this.renderer.removeStyle(this.targetEl, '-webkit-box-orient');
      this.renderer.removeStyle(this.targetEl, 'overflow');
    }
  }
}
