import React, { useEffect, useState } from "react";
import "./style.scss";
import { ResponsiveBar } from "@nivo/bar";


function DiagramMark({ avgMark, avgClass }) {
    const [data, setData] = useState([])


    useEffect(() => {
        const student = { item: "Ученик", count: avgMark}
        const classSt = { item: "Класс", count: avgClass}
        
        if(avgMark >= 4) {
            student["Хорошо"] = avgMark;
            student["ХорошоColor"] = "#B2D078";
        } else if(avgMark >= 3) {
            student["Удовлетворительно"] = avgMark;
            student["УдовлетворительноColor"] = "#F8CA6D";
        } else {
            student["Удовлетворительно"] = avgMark;
            student["УдовлетворительноColor"] = "#F57781";
        }

        if(avgClass >= 4) {
            classSt["Хорошо"] = avgClass;
            classSt["ХорошоColor"] = "#B2D078";
        } else if(avgClass >= 3) {
            classSt["Удовлетворительно"] = avgClass;
            classSt["УдовлетворительноColor"] = "#F8CA6D";
        } else {
            classSt["Удовлетворительно"] = avgClass;
            classSt["УдовлетворительноColor"] = "#F57781";
        }

        setData([student, classSt])
    }, [avgMark, avgClass])

    return (
        <div className="diagram-mark">
            <ResponsiveBar
                data={data}
                keys={["Хорошо", "Удовлетворительно", "Плохо"]}
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
            />
        </div>
    );
}

export default DiagramMark;
