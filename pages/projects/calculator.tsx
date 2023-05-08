import React, { useEffect, useState } from "react";
import PointsData from '../../public/WorldAthletics.json';
import Select from "react-dropdown-select";
import styles from "../../styles/points.module.css"
import clsx from 'clsx';

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
    }, [])

    const [gender, setGender] = useState<Gender[]>([]);
    const [event, setEvent] = useState<Event[]>([]);
    const [category, setCategory] = useState<Category[]>([]);
    const [time, setTime] = useState("0");
    const [calcPoints, setCalcPoints] = useState<boolean>(true)
    const [points, setPoints] = useState<number | null>();
    const [totals, updateTotalArray] = useState<Performance[]>([]);

    const CalculateTotal = () => {
        var perf: Performance = { Gender: "Undefined", Points: 0, Event: "Undefined", Mark: 0, MarkTime: "Undefined", Category: "Undefined" };
        if (calcPoints) { //caclulate the points based on the performance 

            var hour: number = Number(time.split(':')[0]) * 3600;
            var minutes: number = Number(time.split(':')[1]) * 60;
            var seconds: number = Number(time.split(':')[2].split('.')[0]);
            var milliseconds: number = Number(time.split(':')[2].split('.')[1]) / 100;
            var totalTime: number = hour + minutes + seconds + milliseconds;

            perf = findPoints(totalTime, gender[0].Name, "outdoor", event[0].Event);
        } else { //calculate the performance based on the points
            if (points != undefined) {
                if (points <= 1400 && points >= 0) {
                    perf = findPerformance(points, gender[0].Name, "outdoor", event[0].Event);
                }
            }
        }
        if (!totals.includes(perf)) {
            updateTotalArray((oldarray) => [...oldarray, perf]);
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
        <div >
            <div >
                <h2 >World Athletics Points Calculator</h2>
                <p>I could not find an athletics table points for the 2023 atheltics year.
                    So, naturally I made my own. The 2023 tables are valid with points from 0 to 1400 points.
                    <br />
                    <br />
                    Compare equivalent performances across different athletics events. Scores aren’t designed to compare men’s and women’s performances.
                </p>
                <div >
                    <div >
                        <div>
                            <h3>Event</h3>
                            <Select options={OutdoorEvents} labelField="Event" placeholder="Event" valueField="Event" onChange={(e) => setEvent(e)} values={OutdoorEvents} />
                        </div>
                        <div>
                            <h3>Gender</h3>
                            <Select options={GenderArr} labelField="Name" placeholder="Gender" valueField="Value" onChange={(e) => setGender(e)} values={GenderArr} />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <Select options={Category} labelField="Name" placeholder="Category" valueField="Value" onChange={(e) => setCategory(e)} disabled={true} values={Category} />
                        </div>
                    </div>
                    <div className="points-grid--performance">
                        <div>
                            <h3>Time (HH:MM:SS.MS)</h3>
                            <div>
                                <input type="radio" value={true + ""} id="performance"
                                    onChange={() => handleChangeRadio(true)} name="calc" defaultChecked={true} />
                                <input placeholder="hh:mm:ss.ms"
                                    type="text" onChange={(e) => setTime(e.target.value)} disabled={!calcPoints} />
                            </div>
                        </div>
                        <div>
                            <h3>Points (0 - 1400)</h3>
                            <div>
                                <input type="radio" value={false + ""} id="points"
                                    onChange={() => handleChangeRadio(false)} name="calc" />
                                <input placeholder="Points"
                                    type="text" onChange={(e) => setPoints(Number(e.target.value))} disabled={calcPoints} />
                            </div>
                        </div>

                    </div>
                    <div >
                        <button type="button" onClick={() => CalculateTotal()}
                        >Calculate</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Points</th>
                                <th>Mark</th>
                                <th>Gender</th>
                                <th>Category</th>
                                <th>Wind Adjust</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {totals.map((item, key) =>
                                <PerformanceRow performance={item} key={key} handleRemoveItem={handleRemoveItem} />
                            )}
                        </tbody>
                    </table>

                </div>

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
        <tr key={props}>
            <td>{performance.Event}</td>
            <td>{performance.Points}</td>
            <td>{
                Time !== 0 ? Time : performance.Mark}</td>
            <td>{performance.Gender}</td>
            <td>{performance.Category}</td>
            <td>
                {
                    performance.Event === "100m" ||
                        performance.Event === "200m" ||
                        performance.Event === "110mH" ||
                        performance.Event === "100mH" ||
                        performance.Event === "LJ" ||
                        performance.Event === "TJ" ?
                        <input type="number" onChange={(e) => CalculteWindTime(Number(e.target.value))} max={2.0} min={-2.0} /> :
                        <></>
                }
            </td>
            <td onClick={() => props.handleRemoveItem(performance)} >Remove</td>
        </tr>
    );
}

function findPerformance(points: number, gender: string, category: string, event: string): Performance {
    const data = (PointsData as Performance[])
    try {
        var foundItem = data.filter((item: Performance) =>
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
    { Value: 0, Name: "indoor" },
    { Value: 1, Name: "outdoor" },
]

const OutdoorEvents = [
    { Event: "10 Miles" }, { Event: "10,000m" }, { Event: "10,000mW" }, { Event: "1000m" }, { Event: "100km" },
    { Event: "100m" }, { Event: "100mH" }, { Event: "10km" }, { Event: "10kmW" }, { Event: "110mH" },
    { Event: "15,000mW" }, { Event: "1500m" }, { Event: "15km" }, { Event: "15kmW" }, { Event: "2 Miles" },
    { Event: "20,000mW" }, { Event: "2000m" }, { Event: "2000mSC" }, { Event: "200m" }, { Event: "20km" },
    { Event: "20kmW" }, { Event: "25km" }, { Event: "30,000mW" }, { Event: "3000m" }, { Event: "3000mSC" },
    { Event: "3000mW" }, { Event: "300m" }, { Event: "30km" }, { Event: "30kmW" }, { Event: "35,000mW" }, { Event: "35kmW" },
    { Event: "3kmW" }, { Event: "400m" }, { Event: "400mH" }, { Event: "4x100m" }, { Event: "4x200m" }, { Event: "4x400m" },
    { Event: "50,000mW" }, { Event: "5000m" }, { Event: "5000mW" }, { Event: "500m" }, { Event: "50kmW" }, { Event: "5km" }, { Event: "5kmW" },
    { Event: "600m" }, { Event: "800m" }, { Event: "DT" }, { Event: "Heptathlon" }, { Event: "Decathlon" }, { Event: "HJ" }, { Event: "HM" },
    { Event: "HT" }, { Event: "JT" }, { Event: "LJ" }, { Event: "Marathon" }, { Event: "Mile" }, { Event: "PV" }, { Event: "SP" }, { Event: "TJ" }
]