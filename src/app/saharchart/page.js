"use client"
import React, { useEffect, useState } from 'react';
import style from '@/styles/SaharChart.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Modal from '@/components/module/modal/Modal';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { apiGetMonthExpenses, apiPeriodTime } from '../../../api/expenses';
import { getMonthlyName, getPersianMonth } from '../../../lib/date';
import { changeNumberStyle, setChartArrayMonthly } from '../../../lib/chart';
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryLine,
    VictoryTheme,
} from "victory";

const SaharChart = () => {

    const [showReportModal, setShowReportModal] = useState(false)
    const [showMothReportModal, setShowMothReportModal] = useState(false)
    const [showStartModal, setShowStartModal] = useState(false)
    const [showEndModal, setShowEndModal] = useState(false)
    const [isMonthly, setIsMonthly] = useState(true)
    const [exp, setExp] = useState([])

    const [monthly, setMonthly] = useState({
        month: getPersianMonth("m"),
        year: getPersianMonth("y"),
    });

    const [ranges, setRanges] = useState({
        startMonth: getPersianMonth("m"),
        startYear: getPersianMonth("y"),
        endMonth: getPersianMonth("m"),
        endYear: getPersianMonth("y"),
    });


    //function 
    const reportHandler = () => {
        setShowReportModal(true)
    }

    const reportMonthHandler = () => {
        setShowMothReportModal(true)
    }

    const startHandler = () => {
        setShowStartModal(true)
    }

    const endHandler = () => {
        setShowEndModal(true)
    }

    useEffect(() => {
        if (isMonthly) {
            apiGetMonthExpenses(monthly.year, monthly.month)
                .then(res => {
                    setExp(res.result)

                })
        }
    }, [isMonthly])
    useEffect(()=>{
       
            apiPeriodTime(
                ranges.startMonth,
                ranges.startYear,
                ranges.endMonth,
                ranges.endYear,
            ).then((res) => {
                console.log(res);
                if (res.result !== null) {
                    setExp(res.result);
                }
            });
        
    },[!isMonthly])

    return (
        <>
            <Topbar title={'گزارش'} />
            <div className={style.chartWrap}>
                {/* report */}
                <div className={style.monthBtnWrap}>
                    <p className={style.monthBtnTitle}>نوع گزارش</p>
                    <button className={style.monthBtn} onClick={reportHandler}>{isMonthly ? "گزارش ماهانه" : "گزارش بازه دلخواه"}</button>
                </div>

                {
                    isMonthly ? (
                        <div className={style.monthBtnWrap}>
                            <p className={style.monthBtnTitle}>انتخاب ماه</p>
                            <button className={style.monthBtnChoice} onClick={reportMonthHandler}>
                                <span>
                                    {monthly.month !== 0
                                        ? getMonthlyName(monthly.month)
                                        : getMonthlyName(getPersianMonth("m"))}
                                </span>
                                <span>
                                    {" "}
                                    {monthly.year !== 0 ? monthly.year : getPersianMonth("y")}
                                </span>
                            </button>
                        </div>
                    ) : (
                        <div className={style.rengeWraper}>
                            <div className={style.rengeRight}>
                                <p className={style.rengeTitle}>شروع از</p>
                                <button className={style.rengeBtn} onClick={startHandler}>
                                    <span>
                                        {" "}
                                        {ranges.startYear !== 0
                                            ? ranges.startYear
                                            : getPersianMonth("y")}
                                    </span>
                                </button>
                            </div>
                            <div className={style.rengeLeft}>
                                <p className={style.rengeTitle}>تا زمان</p>
                                <button className={style.rengeBtn} onClick={endHandler}>
                                    <span>
                                        {" "}
                                        {ranges.endYear !== 0 ? ranges.endYear : getPersianMonth("y")}
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                }




                {/* chart */}
                <div>
                    {/* <LineChart width={420} height={500} data={exp} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey={setChartArrayMonthly(exp).map(
                                    (data, index) => index + 1,
                                )} stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart> */}
                     <div className={style.chart_container}>
                {!!exp && exp.length > 0 && isMonthly && (
                    <>
                        <h4 className={style.chartTitle}>{isMonthly ? "گزارش ماهانه" : "گزارش بازه دلخواه"}</h4>
                        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
                            <VictoryAxis
                                tickValues={setChartArrayMonthly(exp).map(
                                    (data, index) => index + 1,
                                )}
                                tickFormat={setChartArrayMonthly(exp).map((data) => data.key)}
                                style={{
                                    tickLabels: {
                                        angle: -45, // Rotate labels by 45 degrees counterclockwise
                                        fontSize: 10,
                                        padding: 15,
                                    },
                                }}
                            />
                            <VictoryAxis
                                dependentAxis
                                tickFormat={(x) => changeNumberStyle(x)}
                            />
                            <VictoryBar
                                data={setChartArrayMonthly(exp)}
                                x="key"
                                y="amount"
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 },
                                }}
                                style={{
                                    data: {
                                        fill: "#a8cde8",
                                        width: 20,
                                        cornerRadius: { top: 40 },
                                    }, // Set bar size and round the top corners
                                }}
                            />
                        </VictoryChart>
                    </>
                )}
                {exp.length > 0 && !isMonthly && (
                    <>
                        <h4>{isMonthly ? "گزارش ماهانه" : "گزارش بازه دلخواه"}</h4>
                        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
                            <VictoryAxis
                                tickValues={setChartArrayMonthly(exp).map(
                                    (data, index) => index + 1,
                                )}
                                tickFormat={setChartArrayMonthly(exp).map((data) => data.key)}
                                style={{
                                    tickLabels: {
                                        angle: -45, // Rotate labels by 45 degrees counterclockwise
                                        fontSize: 10,
                                        padding: 15,
                                    },
                                }}
                            />
                            <VictoryAxis
                                dependentAxis
                                tickFormat={(x) => changeNumberStyle(x)}
                            />
                            <VictoryLine
                                data={setChartArrayMonthly(exp)}
                                x="key"
                                y="amount"
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 },
                                }}
                                style={{
                                    data: {
                                        stroke: "#a8cde8",
                                        width: 20,
                                        cornerRadius: { top: 40 },
                                    }, // Set bar size and round the top corners
                                }}
                            />
                        </VictoryChart>
                    </>
                )}
            </div>
                </div>



            </div>

            {/* modal  report*/}
            <Modal title={'انتخاب گزارش'} show={showReportModal} onClose={() => setShowReportModal(false)}>
                <button
                    onClick={() => {
                        setIsMonthly(true)
                        setShowReportModal(false)
                        setExp([])

                    }}>گزارش ماهانه</button>
                <button
                    onClick={() => {
                        setIsMonthly(false)
                        setShowReportModal(false)
                        setExp([])
                    }}>گزارش در بازه دلخواه</button>

            </Modal>
            {/* modal month report */}

            <Modal title={'انتخاب ماه'} show={showMothReportModal} onClose={() => setShowMothReportModal(false)}>
                <select onChange={(event) => {
                    setMonthly({
                        ...monthly,
                        month: +event.target.value,
                    })
                }}>
                    {[...Array.from({ length: 13 }, (j, i) => i++)].map((item) => (
                        <option key={item} value={item}>
                            {getMonthlyName(+item)}
                        </option>
                    ))}

                </select>
                <br />
                <hr />
                <br />
                <select onChange={(event) => {
                    setMonthly({
                        ...monthly,
                        year: +event.target.value,
                    });
                }}>
                    <option value={getPersianMonth("y")}>
                        {getPersianMonth("y")}
                    </option>
                    <option value={getPersianMonth("y") + 1}>
                        {getPersianMonth("y") + 1}
                    </option>
                    <option value={getPersianMonth("y") + 2}>
                        {getPersianMonth("y") + 2}
                    </option>
                    <option value={getPersianMonth("y") + 3}>
                        {getPersianMonth("y") + 3}
                    </option>
                    <option value={getPersianMonth("y") + 4}>
                        {getPersianMonth("y") + 4}
                    </option>
                </select>
            </Modal>

            {/* start modal */}
            <Modal title={'شروع از'} show={showStartModal} onClose={() => setShowStartModal(false)}>
                <input
                    maxLength={4}
                    className={style.input}
                    type="text"
                    onChange={(event) =>
                        setRanges({
                            ...ranges,
                            startYear: +event.target.value,
                        })
                    }
                />
            </Modal>

            {/* End modal */}
            <Modal title={'تا زمان'} show={showEndModal} onClose={() => setShowEndModal(false)}>
                <input
                    maxLength={4}
                    className={style.input}
                    type="text"
                    onChange={(event) =>
                        setRanges({
                            ...ranges,
                            endYear: +event.target.value,
                        })
                    }
                />
            </Modal>
        </>
    );
}

export default SaharChart;
