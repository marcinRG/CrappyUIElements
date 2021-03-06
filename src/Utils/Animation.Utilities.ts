import {Velocity} from 'velocity-animate';

class AnimationsUtils {
    public hiddenAttribute = 'data-hidden-attribute';
    public isNotDisplayedString = 'none';
    public isDisplayedString = 'block';

    public slideToggle(elem, time, ease) {
        const height = this.getElementHeight(elem);
        if (this.isNotDisplayed(elem)) {
            this.slideDown(elem, time, ease, 'hidden', height);
        } else {
            this.slideUp(elem, time, ease, 'hidden', height);
        }
    }

    public slideDown(elem, time, ease, overflowStyle, height) {
        elem.style.overflow = 'hidden';
        elem.style.height = 0 + 'px';
        elem.style.display = this.isDisplayedString;
        elem.removeAttribute(this.hiddenAttribute);
        Velocity(elem, {
            height: height + 'px',
        }, {
            duration: time,
            easing: ease,
            complete: () => {
                elem.style.overflow = overflowStyle;
            },
        });
    }

    public slideUp(elem, time, ease, overflowStyle, height) {
        elem.style.overflow = overflowStyle;
        elem.style.height = height + 'px';
        Velocity(elem, {
            height: '0px',
        }, {
            duration: time,
            easing: ease,
            complete: () => {
                elem.style.display = this.isNotDisplayedString;
                elem.setAttribute(this.hiddenAttribute, '');
            },
        });
    }

    public getElementHeight(elem) {
        const elementProperties = this.getElementsProperites(elem);
        this.changePropertiesToGetElementHeight(elem);
        const height = elem.offsetHeight;
        this.restoreElementsProperties(elem, elementProperties);
        return height;
    }

    public getListElementHeightOverflow(elem, maxLength) {
        let height = 0;
        let overflow = 'auto';
        let childHeight = 0;
        if ((elem instanceof HTMLUListElement) || (elem instanceof HTMLOListElement)
            || (elem instanceof HTMLDivElement)) {
            const elementProperties = this.getElementsProperites(elem);
            this.changePropertiesToGetElementHeight(elem);
            const listLength: number = elem.children.length;
            if (listLength > 0) {
                childHeight = (<HTMLElement> elem.children[0]).offsetHeight;
                if (listLength > maxLength) {
                    height = maxLength * childHeight;
                    overflow = 'auto';
                } else {
                    height = listLength * childHeight;
                    overflow = 'hidden';
                }
            }
            this.restoreElementsProperties(elem, elementProperties);
        }
        return {height, overflow};
    }

    private getElementsProperites(element) {
        return {
            visibility: window.getComputedStyle(element).visibility,
            display: window.getComputedStyle(element).display,
            height: window.getComputedStyle(element).height,
        };
    }

    private restoreElementsProperties(element, savedProperties) {
        element.style.height = savedProperties.height;
        element.style.display = savedProperties.display;
        element.style.visibility = savedProperties.visibility;
    }

    private changePropertiesToGetElementHeight(element) {
        element.style.display = this.isNotDisplayedString;
        element.style.height = null;
        element.style.visibility = 'hidden';
        element.style.display = 'block';
    }

    private isNotDisplayed(elem) {
        return (window.getComputedStyle(elem).display === this.isNotDisplayedString);
    }
}

export const animationsUtils = new AnimationsUtils();
