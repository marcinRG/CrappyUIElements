import {IFont} from '../../Interfaces/Data/Font';
import {IGetText} from '../../Interfaces/Data.Models/IGetText';

export class FontRenderer implements IGetText<IFont> {
    constructor(public fontBoxClass: string) {
    }

    public getText(elem: IFont) {
        const innerHTML = `<span class="${this.fontBoxClass}" style="font-family: ${elem.value}">${elem.name}</span>
`.trim();
        return innerHTML;
    }
}
