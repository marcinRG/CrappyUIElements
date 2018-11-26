declare class AnimationsUtils {
    hiddenAttribute: string;
    isNotDisplayedString: string;
    isDisplayedString: string;
    slideToggle(elem: any, time: any, ease: any): void;
    slideDown(elem: any, time: any, ease: any, overflowStyle: any, height: any): void;
    slideUp(elem: any, time: any, ease: any, overflowStyle: any, height: any): void;
    getElementHeight(elem: any): any;
    getListElementHeightOverflow(elem: any, maxLength: any): {
        height: number;
        overflow: string;
    };
    private getElementsProperites;
    private restoreElementsProperties;
    private changePropertiesToGetElementHeight;
    private isNotDisplayed;
}
export declare const animationsUtils: AnimationsUtils;
export {};
