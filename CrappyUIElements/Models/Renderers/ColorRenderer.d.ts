import { IGetText } from '../../Interfaces/Data.Models/IGetText';
import { IColor } from '../../Interfaces/Data/Color';
export declare class ColorRenderer implements IGetText<IColor> {
    colorBoxClass: string;
    colorTextClass: string;
    constructor(colorBoxClass: string, colorTextClass: string);
    getText(elem: IColor): string;
}
