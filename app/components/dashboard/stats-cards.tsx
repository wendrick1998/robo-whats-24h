'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MessageSquare, 
  AlertTriangle, 
  Package, 
  Users, 
  DollarSign,
  TrendingUp,
  Clock,
  AlertCircle
} from 'lucide-react'

interface StatsCardsProps {
  stats: {
    totalMessages: number
    pendingMessages: number
    urgentMessages: number
    totalProducts: number
    lowStockProducts: number
    totalSuppliers: number
    monthlyRevenue: number
  }
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Mensagens Hoje',
      value: stats.totalMessages.toString(),
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Total de mensagens recebidas'
    },
    {
      title: 'Pendências',
      value: stats.pendingMessages.toString(),
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Mensagens aguardando resposta'
    },
    {
      title: 'Urgentes',
      value: stats.urgentMessages.toString(),
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      description: 'Mensagens marcadas como urgentes'
    },
    {
      title: 'Produtos',
      value: stats.totalProducts.toString(),
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Produtos cadastrados'
    },
    {
      title: 'Estoque Baixo',
      value: stats.lowStockProducts.toString(),
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      description: 'Produtos com estoque baixo'
    },
    {
      title: 'Fornecedores',
      value: stats.totalSuppliers.toString(),
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Fornecedores cadastrados'
    },
    {
      title: 'Receita Mensal',
      value: `R$ ${stats.monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      description: 'Faturamento do mês atual'
    },
    {
      title: 'Crescimento',
      value: '+12.5%',
      icon: TrendingUp,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      description: 'Comparado ao mês anterior'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${card.bgColor}`}>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {card.value}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {card.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}