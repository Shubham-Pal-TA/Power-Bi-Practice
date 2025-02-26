import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
import ISelectionId = powerbi.visuals.ISelectionId;
import IVisual = powerbi.extensibility.IVisual;
import PrimitiveValue = powerbi.PrimitiveValue;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
/**
 * Interface for BarChart data points.
 *
 * @interface
 * @property {PrimitiveValue} value             - Data value for point.
 * @property {string} category          - Corresponding category of data value.
 * @property {string} color             - Color corresponding to data point.
 * @property {string} strokeColor       - Stroke color for data point column.
 * @property {number} strokeWidth       - Stroke width for data point column.
 * @property {ISelectionId} selectionId - Id assigned to data point for cross filtering
 *                                        and visual interaction.
 */
export interface BarChartDataPoint {
    value: PrimitiveValue;
    category: string;
    color: string;
    strokeColor: string;
    strokeWidth: number;
    selectionId: ISelectionId;
    index: number;
    format?: string;
}
export declare class BarChart implements IVisual {
    private averageLine;
    private barContainer;
    private barDataPoints;
    private element;
    private formattingSettingsService;
    private formattingSettings;
    private helpLinkElement;
    private host;
    private isLandingPageOn;
    private LandingPage;
    private LandingPageRemoved;
    private locale;
    private selectionManager;
    private svg;
    private tooltipServiceWrapper;
    private xAxis;
    private barSelection;
    private localizationManager;
    private subSelectionHelper;
    private formatMode;
    private directEditElement;
    private visualDirectEditSubSelection;
    visualOnObjectFormatting?: powerbi.extensibility.visual.VisualOnObjectFormatting;
    static Config: {
        xScalePadding: number;
        solidOpacity: number;
        transparentOpacity: number;
        margins: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        xAxisFontMultiplier: number;
    };
    /**
     * Creates instance of BarChart. This method is only called once.
     *
     * @constructor
     * @param {VisualConstructorOptions} options - Contains references to the element that will
     *                                             contain the visual and a reference to the host
     *                                             which contains services.
     */
    constructor(options: VisualConstructorOptions);
    /**
     * Updates the state of the visual. Every sequential databinding and resize will call update.
     *
     * @function
     * @param {VisualUpdateOptions} options - Contains references to the size of the container
     *                                        and the dataView which contains all the data
     *                                        the visual had queried.
     */
    update(options: VisualUpdateOptions): void;
    private removeEventHandlers;
    private addEventHandlers;
    private updateDirectEditElementFormat;
    private static wordBreak;
    private handleBarClick;
    private handleClick;
    private handleContextMenu;
    private syncSelectionState;
    private isSelectionIdInArray;
    /**
     * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
     * This method is called once every time we open properties pane or when the user edit any format property.
     */
    getFormattingModel(): powerbi.visuals.FormattingModel;
    private getSubSelectionStyles;
    private getSubSelectionShortcuts;
    private getSubSelectables;
    private getColorSelectorShortcuts;
    private getColorSelectorStyles;
    private getEnableAxisStyles;
    private getEnableAxisShortcuts;
    private getDirectEditShortcuts;
    private getDirectEditStyles;
    selectionIdCallback(e: Element): ISelectionId;
    private creatDirectEditElement;
    /**
     * Destroy runs when the visual is removed. Any cleanup that the visual needs to
     * do should be done here.
     *
     * @function
     */
    destroy(): void;
    private getTooltipData;
    private createHelpLinkElement;
    private handleLandingPage;
    private createSampleLandingPage;
    private getColorValue;
    private initAverageLine;
    private handleAverageLineUpdate;
    private calculateAverage;
}
