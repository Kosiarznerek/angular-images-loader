import {Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appImageLoader]'
})
export class ImageLoaderDirective implements OnInit, OnDestroy {

  // Directive inputs
  @Input('imageLoaderTemplate') imageLoaderTemplate: TemplateRef<any>;
  @Input('imageErrorTemplate') imageErrorTemplate: TemplateRef<any>;

  // Directive data
  private embeddedView: EmbeddedViewRef<any>;

  /**
   * Constructor
   */
  constructor(
    private readonly elementRef: ElementRef,
    private readonly viewContainerRef: ViewContainerRef
  ) {
  }

  /**
   * Extracts image element from element ref
   */
  private get imageElement(): HTMLImageElement {
    return this.elementRef.nativeElement;
  }

  /**
   * NgOnInit
   */
  public ngOnInit(): void {

    // Hide image element
    this.imageElement.style.display = 'none';

    // Compile loading template
    this.embeddedView = this.viewContainerRef.createEmbeddedView(this.imageLoaderTemplate);

  }

  /**
   * NgOnDestroy
   */
  public ngOnDestroy(): void {

    // Destroy view if available
    if (this.embeddedView) {
      this.embeddedView.destroy();
    }

  }

  /**
   * Executes when image has been loaded successfully
   * @param event Event data
   */
  @HostListener('load', ['$event'])
  private async imageOnLoad(event: Event): Promise<void> {

    // Delay to be able to see loading
    await new Promise(r => setTimeout(r, Math.random() * 3_000));

    // Destroy loading template
    this.embeddedView.destroy();

    // Show image element
    this.imageElement.style.display = 'block';

  }

  /**
   * Executes when error has occurred during loading
   * @param event Event data
   */
  @HostListener('error', ['$event'])
  private async imageOnError(event: Event): Promise<void> {

    // Delay to be able to see loading
    await new Promise(r => setTimeout(r, Math.random() * 3_000));

    // Compile error template
    this.embeddedView = this.viewContainerRef.createEmbeddedView(this.imageErrorTemplate);

  }

}
