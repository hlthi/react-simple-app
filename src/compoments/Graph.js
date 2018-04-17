import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PieChart, Pie, Sector } from 'recharts';
import { Header } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { updatePieIndex } from '../actions/pie';

/**
 * Recharts render function.
 * For detail http://recharts.org/ (API->PIE) (Direct link doesnt work)
 */
const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`PV ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

/**
 * Show graph by selected user. Using recharts.
 */
const Graph = props => (
  <div className="user-graph">
    <Header as="h1" textAlign="center">
      Posts Percentage
    </Header>

    <PieChart width={800} height={400}>
      <Pie
        dataKey="value"
        activeIndex={props.activeIndex}
        activeShape={renderActiveShape}
        data={props.datas}
        cx={300}
        cy={200}
        innerRadius={100}
        outerRadius={120}
        fill="#8884d8"
        onMouseEnter={(dataVal, index) => props.updatePieIndex(index)}
      />
    </PieChart>
    {props.datas.length === 0 && <div>Please select users.</div>}
  </div>
);

/**
 * State to Props for redux usage
 */
const mapStateToProps = state => ({
  activeIndex: state.pie.activeIndex,
  datas: state.pie.datas,
});

/**
 * Dispatch to Props for redux usage
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePieIndex,
    },
    dispatch,
  );

/**
 * Proptypes control via prop-types library.
 */
Graph.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired,
  updatePieIndex: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Graph);
