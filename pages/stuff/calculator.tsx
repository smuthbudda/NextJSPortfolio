import React, { useEffect, useState } from "react";
import PointsData from '../../public/WorldAthletics.json';
import Select from "react-dropdown-select";
import styles from "../../styles/points.module.css"

import clsx from 'clsx';
import { eventNames } from "process";
import { Time } from "phaser";

interface Performance {
    Points: number | null;
    Gender: string | null;
    Event: string | null;
    Category: string | null;
    Mark: number | null;
    MarkTime: string | null;
}

interface Event {
    Event: string;
}

interface Gender {
    Value: number;
    Name: string;
}

interface Category {
    Value: number;
    Name: string;
}

//TODO: will need to restyle this entire thing. 

export default function PointsCalculator() {
    useEffect(() => {
        console.log("hi");
    }, [])

    const [gender, setGender] = useState<Gender[]>([]);
    const [event, setEvent] = useState<Event[]>([]);
    const [category, setCategory] = useState<Category[]>([{ Value: 1, Name: "Outdoor" }]);
    const [time, setTime] = useState<string>('');
    const [calcPoints, setCalcPoints] = useState<boolean>(true)
    const [points, setPoints] = useState<number | null>();
    const [totals, updateTotalArray] = useState<Performance[]>([]);

    const CalculateTotal = async () => {
        var perf: Performance = { Gender: "Undefined", Points: 0, Event: "Undefined", Mark: 0, MarkTime: "Undefined", Category: "Undefined" };
        try {

            if (calcPoints && time != null) { //caclulate the points based on the performance 

                var hour: number = Number(time.split(':')[0]) * 3600;
                var minutes: number = Number(time.split(':')[1]) * 60;
                var seconds: number = Number(time.split(':')[2].split('.')[0]);
                var milliseconds: number = Number(time.split(':')[2].split('.')[1]) / 100;
                var totalTime: number = hour + minutes + seconds + milliseconds;

                perf = findPoints(totalTime, gender[0].Name, category[0].Name, event[0].Event);
            } else { //calculate the performance based on the points
                if (points != undefined) {
                    if (points <= 1400 && points >= 0) {
                        // perf = findPerformance(points, gender[0].Name, "outdoor", event[0].Event);
                        perf = findPerformance(points, gender[0].Name, category[0].Name, event[0].Event);
                    }
                }
            }
            updateTotalArray((oldarray) => [...oldarray, perf]);

        } catch {
            console.log("There was an error find the performance")
        }
    }

    useEffect(() => {
        setCalcPoints(true);
    }, []);

    const handleRemoveItem = (e: any) => {
        updateTotalArray(totals.filter(item => item !== e));
    }

    const handleChangeRadio = (value: any) => {
        setCalcPoints(value);
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pointContainer}>

                <h2 id={styles.title}>World Athletics Points Calculator</h2>

                <p>
                    This calculator is used to compare the performances of different events. Not to be used for comparing mens and
                    womens events.
                    <br />
                    <br />
                    Data is based off of the most recent 2023 points <a target="_blank" rel="noopener noreferrer" href="../PointsTable.pdf">table</a> released by World Athletics. The
                    json file containing the all performances can be downloaded <a target="_blank" rel="noopener noreferrer" href="../WorldAthletics.json">here. </a>
                    Performances adjust via wind use the formulas from this <a target="_blank" rel="noopener noreferrer" href="https://www.tandfonline.com/doi/full/10.1080/17461391.2018.1480062">paper.</a>
                </p>

                <div className={styles.calculate}>
                    <div className={styles.dropdown}>
                        <div className={styles.eventSelector}>
                            <h4>Category</h4>
                            <Select options={Category} labelField="Name" placeholder="Category" valueField="Value" onChange={(e) => setCategory(e)} values={[]} className={styles.select} />
                        </div>
                        <div className={styles.eventSelector}>
                            <h4>Gender</h4>
                            <Select options={GenderArr} labelField="Name" placeholder="Gender" valueField="Value" onChange={(e) => setGender(e)} values={[]} className={styles.select} />
                        </div>
                        <div className={styles.eventSelector}>
                            <h4>Event</h4>
                            <Select options={category[0].Name == "Outdoor" ? OutdoorEvents : IndoorEvents} labelField="Event" placeholder="Event" valueField="Event" onChange={(e) => setEvent(e)} values={[]} className={styles.select} />
                        </div>
                    </div>

                    <div className={styles.dropdown}>

                        <div className={styles.inputs}>
                            <input type="radio" value={true + ""} id="performance" onChange={() => handleChangeRadio(true)} name="calc" defaultChecked={true} className={styles.radio} />
                            <label className={styles.input}>
                                <input className={styles.input__field} id={styles.time} type="text" onChange={(e) => setTime(e.target.value)}
                                    disabled={!calcPoints} step="0.001" />
                                <span className={styles.input__label}>Time (HH:MM:SS.MS)</span>
                            </label>
                        </div>

                        <div className={styles.inputs} >
                            <input type="radio" value={false + ""} id="points" onChange={() => handleChangeRadio(false)} name="calc" className={styles.radio} />
                            <label className={styles.input}>
                                <input className={styles.input__field} placeholder=""
                                    type="text" onChange={(e) => setPoints(Number(e.target.value))} disabled={calcPoints} max={1400} />
                                <span className={styles.input__label}>Points (0 - 1400)</span>
                            </label>
                        </div>

                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="button" onClick={() => CalculateTotal()} className={styles.calculateButton}
                        >Calculate</button>
                    </div>

                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Score</th>
                            <th>Mark</th>
                            <th>Gender</th>
                            <th>Wind Adjust</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {totals.map((item, key) =>
                            <PerformanceRow performance={item} key={key} handleRemoveItem={handleRemoveItem} />
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

const PerformanceRow = (props: any, calc = false) => {
    const [performance, setPerformance] = useState(props.performance);
    const [Time, setTime] = useState<number>(0);
    const [calculate, setcalculate] = useState<boolean>(calc);

    const CalculteWindTime = (wind: number) => {
        var time = performance.Event == "100m" ? performance.Mark - (0.0449 * wind) + (0.009459 * performance.Mark * wind) - (0.0042 * wind * wind) :
            performance.Event == "200m" ? performance.Mark + (0.090 * wind) - (0.010 * wind * wind) :
                performance.Event == ("110mH" || "100mH") ? performance.Mark + (0.093 * wind) - (0.010 * wind * wind) :
                    performance.Event == "LJ" ? performance.Mark - (0.029 * wind) :
                        performance.Event == "TJ" ? performance.Mark + (0.069 * wind) - (0.009 * wind * wind) :
                            performance.Mark;
        setcalculate(true);
        setTime(time.toFixed(2));
    }

    return (
        <tr key={props} className={styles.row}>
            <td>{performance.Event}</td>
            <td>{performance.Points}</td>
            <td>{
                Time != 0 ? Time : performance.Mark}</td>
            <td>{performance.Gender}</td>
            <td>
                {
                    performance.Event === "100m" ||
                        performance.Event === "200m" ||
                        performance.Event === "110mH" ||
                        performance.Event === "100mH" ||
                        performance.Event === "LJ" ||
                        performance.Event === "TJ" ?
                        <input type="number" onChange={(e) => CalculteWindTime(Number(e.target.value))} className={styles.input__field} /> :
                        <></>
                }
            </td>
            <td onClick={() => props.handleRemoveItem(performance)} className={styles.remove}>Remove</td>
        </tr>
    );
}

function findPerformance(points: number, gender: string, category: string, event: string): Performance {
    const data = (PointsData as Performance[])
    try {
        let foundItem = data.filter((item: Performance) =>
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
        var perf: Performance = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "" }
        return perf;
    }
}

//works for times will need to adjust it for other events which use distance and heights
function findPoints(performance: number, gender: string, category: string, event: string): Performance {
    const data = (PointsData as Performance[])
    try {
        var perf: Performance = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "" }
        var foundItem = data.filter((item: Performance) =>
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
        var perf: Performance = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "" }
        return perf;
    }
}

const GenderArr: Gender[] = [
    { Value: 0, Name: "male" },
    { Value: 1, Name: "female" },
]

const Category: Category[] = [
    { Value: 0, Name: "Indoor" },
    { Value: 1, Name: "Outdoor" },
]

const OutdoorEvents = [
    { Event: "100m" },
    { Event: "110mH" },
    { Event: "200m" },
    { Event: "300m" },
    { Event: "400m" },
    { Event: "400mH" },
    { Event: "500m" },
    { Event: "600m" },
    { Event: "800m" },
    { Event: "4x100m" },
    { Event: "4x200m" },
    { Event: "10,000m" },
    { Event: "1000m" },
    { Event: "100mH" },
    { Event: "10km" },
    { Event: "10kmW" },
    { Event: "1500m" },
    { Event: "2 Miles" },
    { Event: "2000m" },
    { Event: "2000mSC" },
    { Event: "3000m" },
    { Event: "3000mSC" },
    { Event: "3000mW" },
    { Event: "4x400m" },
    { Event: "5000m" },
    { Event: "5000mW" },
    { Event: "50kmW" },
    { Event: "5km" },
    { Event: "5kmW" },
    { Event: "DT" },
    { Event: "Heptathlon" },
    { Event: "Decathlon" },
    { Event: "HJ" },
    { Event: "HM" },
    { Event: "HT" },
    { Event: "JT" },
    { Event: "LJ" },
    { Event: "Marathon" },
    { Event: "Mile" },
    { Event: "PV" },
    { Event: "SP" },
    { Event: "TJ" },
]

const IndoorEvents = [
    { Event: "50m" },
    { Event: "50mH" },
    { Event: "55m" },
    { Event: "55mH" },
    { Event: "60m" },
    { Event: "60mH" },
    { Event: "200m" },
    { Event: "300m" },
    { Event: "400m" },
    { Event: "400mH" },
    { Event: "500m" },
    { Event: "600m" },
    { Event: "800m" },
    { Event: "1000m" },
    { Event: "1500m" },
    { Event: "Mile" },
    { Event: "2000m" },
    { Event: "3000m" },
    { Event: "4x200m" },
    { Event: "4x400m" },
    { Event: "2" },
    { Event: "5000m" },
    { Event: "Pentathlon" },
    { Event: "Heptathlon" },
    { Event: "DT" },
    { Event: "HJ" },
    { Event: "HM" },
    { Event: "HT" },
    { Event: "JT" },
    { Event: "LJ" },
    { Event: "PV" },
    { Event: "SP" },
    { Event: "TJ" },
]