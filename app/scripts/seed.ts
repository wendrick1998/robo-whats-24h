import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário admin de teste
  const hashedPassword = await bcrypt.hash('johndoe123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'John Doe',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Usuário admin criado:', adminUser.email)

  // Criar loja de exemplo
  const store = await prisma.store.upsert({
    where: { id: 'demo-store' },
    update: {},
    create: {
      id: 'demo-store',
      name: 'Loja Demo',
      phone: '+5511999999999',
      email: 'contato@lojademo.com',
      plan: 'PREMIUM',
      active: true,
      ownerId: adminUser.id,
    },
  })

  console.log('✅ Loja criada:', store.name)

  // Criar instância Evolution API pré-configurada "wendrick"
  const evolutionInstance = await prisma.evolutionInstance.upsert({
    where: { instanceName: 'wendrick' },
    update: {},
    create: {
      id: 'wendrick-instance',
      name: 'Wendrick WhatsApp',
      instanceName: 'wendrick',
      baseUrl: 'https://api.zaytechsystems.com',
      globalApiKey: 'f308e505f9501554bcd5a65410af5fd8',
      instanceToken: 'F8ADCF4E9269-4463-B36B-B9D29E027BF6',
      storeId: store.id,
      webhookUrl: 'https://robo-whats-evolution.com/api/webhooks/evolution',
      autoConnect: true,
      status: 'DISCONNECTED',
    },
  })

  console.log('✅ Instância Evolution API criada:', evolutionInstance.name)

  // Criar categorias padrão
  const categories = [
    { name: 'Família', color: '#16a34a', priority: 1, keywords: ['familia', 'mãe', 'pai', 'filho', 'casa', 'pessoal'] },
    { name: 'Namorada', color: '#dc2626', priority: 2, keywords: ['amor', 'querida', 'baby', 'coração', 'saudade'] },
    { name: 'Loja', color: '#2563eb', priority: 3, keywords: ['venda', 'produto', 'preço', 'estoque', 'cliente'] },
    { name: 'Fornecedor', color: '#7c3aed', priority: 2, keywords: ['fornecedor', 'pedido', 'entrega', 'nota fiscal', 'pagamento'] },
    { name: 'Financeiro', color: '#ea580c', priority: 1, keywords: ['dinheiro', 'pagar', 'conta', 'banco', 'pix', 'boleto'] },
    { name: 'Outros', color: '#6b7280', priority: 5, keywords: [] },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { 
        storeId_name: {
          storeId: store.id,
          name: category.name
        }
      },
      update: {},
      create: {
        ...category,
        storeId: store.id,
      },
    })
  }

  console.log('✅ Categorias criadas')

  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })