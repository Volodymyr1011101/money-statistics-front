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
const categoryColors = [
    '#DFAD3F',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
    '#ff9bd2',
];
const data = {
    datasets: [
        {
            data: [300, 500, 100, 400],
            backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ],
            borderWidth: 0,
            borderRadius: 0,
            cutout: '70%'
        }
    ]
};

const options = {
    responsive: true,
};


const MyChart = ({balance}) => {
    return (
        <div className={styles.wrapper}>
            <Doughnut data={data} options={options} />
            <span className={styles.balance}>₴ {formatted(balance)}</span>
        </div>
    )
};

export default MyChart;
