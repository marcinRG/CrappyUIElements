import {IGetText} from '../../Interfaces/Data.Models/IGetText';
import {IColor} from '../../Interfaces/Data/Color';

export class ColorRenderer implements IGetText<IColor> {

    constructor(public colorBoxClass: string, public colorTextClass: string) {
    }

    public getText(elem: IColor) {
        const innerHTML = `<span class="${this.colorBoxClass}" style="background-color: ${elem.value}"></span>
                           <span class="${this.colorTextClass}">${elem.name}</span>`.trim();
        return innerHTML;
    }
}
