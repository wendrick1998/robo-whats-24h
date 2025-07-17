'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { BarChart3 } from 'lucide-react'

interface CategoryData {
  name: string
  count: number
  color: string
}

interface CategoryChartProps {
  data: CategoryData[]
}

export default function CategoryChart({ data }: CategoryChartProps) {
  const totalMessages = data.reduce((sum, item) => sum + item.count, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Mensagens por Categoria
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data?.length > 0 ? (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [
                    `${value} mensagens (${((value / totalMessages) * 100).toFixed(1)}%)`,
                    'Quantidade'
                  ]}
                />
                <Legend 
                  verticalAlign="top"
                  height={36}
                  wrapperStyle={{ fontSize: 11 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Nenhum dado disponível</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}