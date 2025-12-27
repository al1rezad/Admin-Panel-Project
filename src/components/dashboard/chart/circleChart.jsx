import { ResponsiveContainer ,Cell, Pie, PieChart } from 'recharts';
import { useEffect,useState } from 'react';
import axios from 'axios';


// #endregion

const RADIAN = Math.PI / 180;
const COLORS = ['#06B6D4', 'rgba(254, 240, 138, 0.9)',];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle || 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle || 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${((percent || 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartWithCustomizedLabel({
  isAnimationActive = true,

    
}) {

    const [register , setRegister] = useState([])
    const [attend , setAttend] = useState([])
  

    useEffect(()=>{
      async function getData(){
        const response =await  axios.get("/data.json" , {responseType : 'json'})
        const registerLen = response.data.filter((item)=> item.Status === "Attended" )
        setRegister(registerLen)
        const attendLen = response.data.filter((item)=>item.Status ==="Registered")
        setAttend(attendLen)
      }
      getData()
    },[])

    // #region Sample data
    const data = [
    { name: 'Group A', value: register.length },
    { name: 'Group B', value: attend.length },
 
    ];

  return (
    
            <PieChart
           style={{ width: '100%', maxHeight: '100%', aspectRatio: 1 }} responsive
             
        > 
                <Pie  
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    dataKey="value" 
                    isAnimationActive={isAnimationActive}
                >
                    {data.map((entry, index) => (
                    <Cell
                        key={`cell-${entry.name}`}
                        fill={COLORS[index % COLORS.length]}
                    />
        ))}
                </Pie>
            </PieChart> 
        
    
    
  );
}