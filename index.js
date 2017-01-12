import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import moment from 'moment';
moment.locale('zh-cn');

class DateRange extends React.Component {
  state = {
    SelectDate: null
  };

  disabledRangeDate = (startValue) => {
    return startValue && startValue.valueOf() < moment(moment().date(),"DD") || startValue && startValue.valueOf() > moment('2017-09-01', 'YYYY-MM-DD');
  }

  render() {
    const { SelectDate } = this.state;
    return (
      <div>
      <h1>Hello Antd!</h1>
      <hr />
      <br />
        <DatePicker
          disabledDate={this.disabledRangeDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={SelectDate}
          placeholder="SelectDate"
        />
      </div>
    );
  }
}

ReactDOM.render(<DateRange />, document.getElementById('root'));