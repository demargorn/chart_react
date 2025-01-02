const ChartItem = ({ className, style, itemIndex, color, item }) => (
   <div
      className={'Charts--item' + (className === 'horizontal' ? '' : ' ' + className)}
      style={style}
      key={itemIndex}
   >
      <b style={{ color: color }}>{item}</b>
   </div>
);

export default ChartItem;
