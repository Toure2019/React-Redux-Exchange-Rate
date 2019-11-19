import React, { Component } from 'react';
import ReacChartKick , { AreaChart } from 'react-chartkick';
import Chart from 'chart.js';

ReacChartKick.addAdapter(Chart);

class RateExchangeListItem extends Component {
    render() {
        console.log(this.props.rateExchange);
        const { name, flag, rates, currencyCode } = this.props.rateExchange;
        return (
        <tr>
            <td>{ name }<br/><img src={ flag } height="60" width="100" alt={name} /></td>
            <td className="col-md-12">
                <AreaChart data={formatData(rates, currencyCode)} 
                        xtitle="Date" 
                        ytitle={currencyCode} />
            </td>
        </tr>
        );
    }
}

function formatData(rates, currencyCode) {
    return Object.keys(rates).map(date => {
        return [date, rates[date][currencyCode]]
    })
}

export default RateExchangeListItem;