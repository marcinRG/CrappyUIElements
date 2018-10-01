export interface IDatePickerProperties {
    querySelectorString: string;
    elementClass: string;
    //inputs row
    inputsRowClass?: string;
    txtInputClass?: string;
    btnInputClass?: string;
    //days display elements
    daysDisplayClass?: string;
    //month selection element
    monthSelectionClass?: string;
    prevBtnClass?: string;
    nextBtnClass?: string;
    monthYearLabelClass?: string;
    //
    dayLabelsSelector?: string;
    todayClass: string;
    selectedDayClass: string;
}
