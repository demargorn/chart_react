import { compareNumbers } from './supportFunctions';
import ChartItem from './ChartItem';

const Charts = ({ className, ...props }) => {
   const { data, series, labels, colors, max } = props;

   function handlerDataMap() {
      return data.map((serie, serieIndex) => {
         const sortedSerie = serie.slice(0);
         const sum = serie.reduce((carry, current) => carry + current, 0);
         sortedSerie.sort(compareNumbers);

         return (
            <div
               className={'Charts--serie ' + (className === 'horizontal' ? '' : className)}
               key={serieIndex}
               style={{ height: className === 'horizontal' ? 'auto' : 250 }}
            >
               {className === 'horizontal' ? (
                  <label>{series[serieIndex]}</label>
               ) : (
                  <label>{labels[serieIndex]}</label>
               )}

               {serie.map((item, itemIndex) => {
                  const color = colors[itemIndex];
                  const size = className === 'stacked' ? (item / sum) * 100 : (item / max) * 100;
                  const style = {
                     backgroundColor: color,
                     opacity: className === 'stacked' ? 1 : item / max + 0.05,
                     zIndex: item,
                     width: className === 'horizontal' ? size + '%' : '',
                     height: className === 'horizontal' ? '' : size + '%',
                     right:
                        className === 'layered'
                           ? (sortedSerie.indexOf(item) / (serie.length + 1)) * 100 + '%'
                           : '',
                  };

                  return (
                     <ChartItem
                        className={className}
                        style={style}
                        key={itemIndex}
                        color={color}
                        item={item}
                     />
                  );
               })}
            </div>
         );
      });
   }

   return (
      <div className={'Charts ' + (className === 'horizontal' ? className : '')}>
         {handlerDataMap()}
      </div>
   );
};

export default Charts;
