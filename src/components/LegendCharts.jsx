const LegendCharts = ({ labels, colors }) =>
   labels.map((label, labelIndex) => (
      <div key={labelIndex}>
         <span
            className='Legend--color'
            style={{ backgroundColor: colors[labelIndex % colors.length] }}
         />
         <span className='Legend--label'>{label}</span>
      </div>
   ));

export default LegendCharts;
