import PerformanceClass from "@/data/types/Performance.ts";
import PointsData from '../../public/WorldAthletics.json';

export function findPerformance(points: number, gender: string, category: string, event: string): PerformanceClass {
    const data = (PointsData as PerformanceClass[])
    try {
        let foundItem = data.filter((item: PerformanceClass) =>
            item.Points == points &&
            item.Gender == gender &&
            item.Category == category &&
            item.Event == event
        )[0];
        if (foundItem == undefined && points >= 1) {
            foundItem = findPerformance(points - 1, gender, category, event);
        }
        return foundItem;
    } catch (error) {
        console.log("The was an error searching for the performance");
        var perf: PerformanceClass = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "" }
        return perf;
    }
}

//works for times will need to adjust it for other events which use distance and heights
export function findPoints(performance: number, gender: string, category: string, event: string): PerformanceClass {
    const data = (PointsData as PerformanceClass[])
    try {
        var perf: PerformanceClass = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "" }
        var foundItem = data.filter((item: PerformanceClass) =>
            item.Mark == performance &&
            item.Gender == gender &&
            item.Category == category &&
            item.Event == event
        )[0];
        if (foundItem == undefined && performance > 0.00) {
            performance = Number((performance - 0.01).toFixed(2));
            foundItem = findPoints(performance, gender, category, event);
        }
        if (foundItem == undefined) {
            return perf;
        }
        return foundItem;
    } catch (error) {
        console.log("There was an error - Performance out of range")
        error = "There was an error - Performance out of range";
        var perf: PerformanceClass = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "" }
        return perf;
    }
}