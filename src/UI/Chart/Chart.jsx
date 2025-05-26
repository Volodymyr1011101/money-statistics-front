import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title
} from 'chart.js';

import styles from './styles.module.scss';
import { Doughnut } from 'react-chartjs-2';
import {formatted} from "../../helpers/constants";

// Регистрируем только нужные модули
ChartJS.register(ArcElement, Tooltip, Legend, Title);



const options = {
    responsive: true,
};


const MyChart = ({balance, items}) => {

    const data = {
        datasets: [
            {
                data: items?.map((item) => item.total),
                backgroundColor: items.map((item) => item.color),
                borderWidth: 0,
                borderRadius: 0,
                cutout: '70%'
            }
        ]
    };
    return (
        <div className={styles.wrapper}>
            <Doughnut data={data} options={options} />
            <span className={styles.balance}>₴ {formatted(balance)}</span>
        </div>
    )
};

export default MyChart;
