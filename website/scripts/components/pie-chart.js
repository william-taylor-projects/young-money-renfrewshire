import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'Recharts';
import React from 'react';

export default props => {
    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie isAnimationActive={true} data={props.data} label outerRadius={120} fill="#8884d8">
                {
                    props.data.map((entry, index) => <Cell key={index} fill={entry.color}/>)
                }
                </Pie>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    );
}
