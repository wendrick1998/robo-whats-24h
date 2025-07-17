# Robô-Whats 24h 🤖

Sistema completo de automação WhatsApp 24h desenvolvido com tecnologias modernas para gerenciamento eficiente de mensagens e atendimento automatizado.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14 com TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Backend**: Evolution API para integração WhatsApp
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Autenticação**: Sistema de login seguro
- **Deploy**: Configuração para produção

## 📋 Funcionalidades

- ✅ Interface de gerenciamento completa
- ✅ Integração com Evolution API
- ✅ Sistema de autenticação
- ✅ Dashboard com estatísticas
- ✅ Gerenciamento de mensagens
- ✅ Configurações personalizáveis
- ✅ Logs de atividades
- ✅ Responsivo para mobile

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/wendrick1998/robo-whats-24h.git
cd robo-whats-24h
```

2. Instale as dependências:
```bash
cd app
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

4. Execute as migrações do banco:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
app/
├── components/          # Componentes React
├── pages/              # Páginas Next.js
├── prisma/             # Schema e migrações do banco
├── public/             # Arquivos estáticos
├── styles/             # Estilos CSS
├── utils/              # Utilitários e helpers
└── ...
```

## 🔧 Configuração

1. **Evolution API**: Configure a URL e token da Evolution API
2. **Banco de Dados**: Configure a string de conexão PostgreSQL
3. **Autenticação**: Configure as chaves de autenticação
4. **WhatsApp**: Configure a instância do WhatsApp

## 📱 Como Usar

1. Acesse o painel administrativo
2. Faça login com suas credenciais
3. Configure a instância do WhatsApp
4. Defina as mensagens automáticas
5. Monitore as atividades no dashboard

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas, entre em contato através das issues do GitHub.

---

Desenvolvido com ❤️ para automação WhatsApp eficiente.