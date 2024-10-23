import React from "react";
import "./style.scss";
import { ResponsiveBar } from "@nivo/bar";

const data = [
    {
        item: "Ученик",
        нормально: 3.7,
        нормальноColor: "#ffca3a",
        count: 3.7,
    },
    {
        item: "Класс",
        хорошо: 4.5,
        хорошоColor: "#8ac926",
        count: 4.5,
    },
];

function DiagramMark() {
    return (
        <div className="diagram-mark">
            <ResponsiveBar
                data={data}
                keys={["хорошо", "нормально", "плохо"]}
                indexBy="item"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={({ id, data }) => String(data[`${id}Color`])}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: "transparent",
                                strokeWidth: 1,
                            },
                        },
                        ticks: {
                            line: {
                                stroke: "#777777",
                                strokeWidth: 1,
                            },
                            text: {
                                fill: "#ffffff",
                                fontSize: 18,
                            },
                        },
                        legend: {
                            text: {
                                fill: "#ffffff",
                                fontSize: 20,
                            },
                        },
                    },
                    labels: {
                        text: {
                            fill: "#ffffff",
                            fontSize: 36,
                        },
                    },
                }}
                maxValue={5}
                minValue={0}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Средний балл",
                    legendPosition: "middle",
                    legendOffset: -50,
                    truncateTickAt: 0,
                }}
                labelSkipWidth={5}
                labelSkipHeight={12}
                role="application"
                barAriaLabel={(e) => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </div>
    );
}

export default DiagramMark;
