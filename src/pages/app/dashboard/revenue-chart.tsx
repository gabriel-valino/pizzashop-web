import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 950 },
  { date: '13/12', revenue: 1100 },
  { date: '14/12', revenue: 840 },
  { date: '15/12', revenue: 1300 },
  { date: '16/12', revenue: 1900 },
]

const chartConfig = {
  revenue: {
    label: 'Revenue',
  },
  date: {
    label: 'Date',
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="max-h-[300px] min-h-[200px] w-full"
        >
          <LineChart data={chartData} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
            <CartesianGrid vertical={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
