import { AfterViewInit, Component, HostListener, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-more-less',
  templateUrl: './more-less-button.component.html',
  styleUrls: ['./more-less-button.component.css']
})
export class MoreLessComponent implements AfterViewInit {

  @Input() targetId!: string;
  @Input() maxLines: number = 3;

  expanded = false;
  showToggle = false;

  private targetEl!: HTMLElement;
  private fullHeight = 0;
  private clampedHeight = 0;

  
  isMobile = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.checkWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkWidth();
    this.apply();
  }

  ngAfterViewInit(): void {
    this.apply();
  }

  apply() {
    if (!this.isMobile) return;

    this.targetEl = document.getElementById(this.targetId)!;
    if (!this.targetEl) return;

    // Measure full height
    this.fullHeight = this.targetEl.scrollHeight;

    // Apply clamp to measure clamped height
    this.applyClamp(true);
    this.clampedHeight = this.targetEl.getBoundingClientRect().height;

    // Decide if toggle should be shown
    this.showToggle = this.fullHeight > this.clampedHeight;

    // Reset clamp state if not initially expanded
    if (!this.expanded) {
      this.applyClamp(true);
    }
  }
  
  private checkWidth() {
    this.isMobile = window.innerWidth <= 1500;
  }

  toggle(): void {
    this.expanded = !this.expanded;
    this.applyClamp(!this.expanded);
  }

  private applyClamp(apply: boolean) {
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
