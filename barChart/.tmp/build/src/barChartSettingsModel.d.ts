import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { BarChartDataPoint } from "./barChart";
import Card = formattingSettings.SimpleCard;
import Model = formattingSettings.Model;
import Slice = formattingSettings.Slice;
import ToggleSwitch = formattingSettings.ToggleSwitch;
declare class EnableAxisCardSettings extends Card {
    show: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    topLevelSlice: ToggleSwitch;
    name: string;
    displayName: string;
    slices: Slice[];
}
declare class ColorSelectorCardSettings extends Card {
    name: string;
    displayName: string;
    slices: Slice[];
}
declare class GeneralViewCardSettings extends Card {
    opacity: formattingSettings.NumUpDown;
    showHelpLink: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    helpLinkColor: string;
    slices: Slice[];
}
declare class AverageLineCardSettings extends Card {
    show: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    showDataLabel: formattingSettings.ToggleSwitch;
    topLevelSlice: ToggleSwitch;
    name: string;
    displayName: string;
    analyticsPane: boolean;
    slices: Slice[];
}
declare class DirectEditSettings extends Card {
    displayName: string;
    name: string;
    private minFontSize;
    private defaultFontSize;
    show: formattingSettings.ToggleSwitch;
    topLevelSlice: ToggleSwitch;
    textProperty: formattingSettings.TextInput;
    position: formattingSettings.AutoDropdown;
    font: formattingSettings.FontControl;
    fontColor: formattingSettings.ColorPicker;
    background: formattingSettings.ColorPicker;
    slices: Slice[];
}
/**
* BarChart formatting settings model class
*/
export declare class BarChartSettingsModel extends Model {
    enableAxis: EnableAxisCardSettings;
    colorSelector: ColorSelectorCardSettings;
    generalView: GeneralViewCardSettings;
    averageLine: AverageLineCardSettings;
    directEditSettings: DirectEditSettings;
    cards: Card[];
    /**
     * populate colorSelector object categories formatting properties
     * @param dataPoints
     */
    populateColorSelector(dataPoints: BarChartDataPoint[]): void;
}
export {};
