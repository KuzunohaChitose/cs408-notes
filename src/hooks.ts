import functionPlot from "function-plot";
import { onMounted } from "vue";
import type { FunctionPlotOptions } from "function-plot";

type NewFpOptions = {
    [P in keyof FunctionPlotOptions as P extends "target"
        ? never
        : P extends "height"
        ? never
        : P extends "width"
        ? never
        : P]: FunctionPlotOptions[P];
} & { id: string };

const useFnGraph = (options: NewFpOptions[]) => {
    onMounted(() => {
        options.forEach((option) => {
            const element = document.querySelector<HTMLElement>(
                `#${option.id}`
            )!;
            functionPlot({
                target: element,
                ...option,
                height: element.clientHeight,
                width: element.clientWidth,
                id: undefined,
            });
        });
    });
};

export { useFnGraph };
