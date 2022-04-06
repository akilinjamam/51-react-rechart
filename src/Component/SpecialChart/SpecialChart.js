import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';


const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loddedData = data.data.data;
                const phoneData = loddedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const ph = {
                        name: parts[0],
                        values: parseInt(parts[1])
                    }

                    return ph

                });

                setPhones(phoneData)
                console.log(phoneData)
            })
    }, [])
    return (
        <BarChart width={700} height={400} data={phones}>
            <Bar dataKey="values" fill="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default SpecialChart;