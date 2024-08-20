import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { product: 'Pepperoni', amount: 30 },
  { product: 'Mussarela', amount: 55 },
  { product: 'Marguerita', amount: 40 },
  { product: '4 Queijos', amount: 26 },
  { product: 'Frango com Catupiry', amount: 32 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

const chartConfig = {
  product: {
    label: 'Product',
  },
  amount: {
    label: 'Quantidade',
  },
} satisfies ChartConfig

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="max-h-[300px] min-h-[200px] w-full"
        >
          <PieChart data={chartData} style={{ fontSize: 12 }}>
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {chartData[index].product.length > 12
                      ? chartData[index].product.substring(0, 12).concat('...')
                      : chartData[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {chartData.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                    stroke={colors.transparent}
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
