import React from 'react';

const Dashboard = ({ totalRequests, successRate, averageResponseTime, activeUsers }) => {
    return (
        <div>
            <h1>Dashboard Statistics</h1>
            <div>
                <h2>Total Requests: {totalRequests}</h2>
                <h2>Success Rate: {successRate}%</h2>
                <h2>Average Response Time: {averageResponseTime} ms</h2>
                <h2>Active Users: {activeUsers}</h2>
            </div>
        </div>
    );
};

export default Dashboard;