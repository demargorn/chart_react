import { useState, useEffect } from 'react';
import { getRandomInt } from './supportFunctions';
import Charts from './Charts';
import LegendCharts from './LegendCharts';

const App = () => {
   const [data, setData] = useState([]);
   const series = ['France', 'Italy', 'England', 'Sweden', 'Germany'];
   const labels = ['cats', 'dogs', 'horses', 'ducks', 'cows'];
   const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

   const max = [...data].reduce(
      (max, serie) =>
         Math.max(
            max,
            serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)
         ),
      0
   );

   function populateArray() {
      const series = 5;
      const serieLength = 5;
      let data = new Array(series).fill(new Array(serieLength).fill(0));

      data = data.map((serie) => serie.map((i) => getRandomInt(0, 20)));
      setData(data);
   }

   const props = { data, series, labels, colors, max };

   useEffect(() => {
      populateArray();
      setInterval(() => populateArray(), 2000);
   }, []);

   return (
      <section>
         <Charts {...props} />
         <Charts className='stacked' {...props} />
         <Charts className='layered' {...props} />
         <Charts className='horizontal' {...props} />
         <LegendCharts {...props} />
      </section>
   );
};

export default App;
