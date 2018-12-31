import { IComponentProperties } from './IComponent.Properties';
export interface IDatePickerProperties extends IComponentProperties {
    inputsRowClass?: string;
    txtInputClass?: string;
    btnInputClass?: string;
    daysDisplayClass?: string;
    monthSelectionClass?: string;
    prevBtnClass?: string;
    nextBtnClass?: string;
    monthYearLabelClass?: string;
    dayTableClass?: string;
    dayLabelClass?: string;
    dayClass?: string;
    todayClass: string;
    selectedDayClass: string;
    showDateOnStart?: boolean;
    datePickerDivClass?: string;
    daysZindex: number;
}
