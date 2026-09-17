# 📖 Guia Passo a Passo: Publicação Gratuita no GitHub Pages

Este guia foi elaborado especialmente para você colocar o seu site no ar gratuitamente no **GitHub Pages**, sem pagar mensalidade nem anuidade de hospedagem, com certificado de segurança SSL (HTTPS) incluso automaticamente.

---

## 🎯 Opção 1: Seu site no endereço principal (Recomendado)
Se você criar um repositório chamado exatamente:
`seu-usuario.github.io` (substituindo *seu-usuario* pelo seu nome de usuário no GitHub), a URL do seu site será:
👉 **`https://seu-usuario.github.io`**

## 🎯 Opção 2: Seu site como repositório de projeto
Se você criar um repositório com o nome `site` ou `developer-site`, a URL do seu site será:
👉 **`https://seu-usuario.github.io/site/`**

---

## 🚀 Passo a Passo Prático

### Passo 1: Criar o Repositório no GitHub
1. Acesse sua conta no [GitHub.com](https://github.com).
2. No canto superior direito, clique no botão **`+`** e selecione **`New repository`**.
3. Em **Repository name**, digite o nome desejado (por exemplo: `seu-usuario.github.io` ou `site`).
4. Deixe o repositório como **Public** (necessário para GitHub Pages gratuito).
5. **Não marque** as opções de adicionar README ou .gitignore (já criamos tudo isso localmente para você).
6. Clique no botão verde **`Create repository`**.

---

### Passo 2: Enviar seus arquivos locais para o GitHub
No terminal do seu computador, dentro da pasta do projeto (`/Users/paulo/projetos/projetos_antigravity/paulo-develope-site`), execute os seguintes comandos:

```bash
# 1. Vincule seu repositório remoto (substitua SEU_USUARIO e NOME_DO_REPOSITORIO pelos seus dados reais)
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# 2. Envie o código para o GitHub
git push -u origin main
```

*(Se o GitHub solicitar login, autentique-se via navegador ou utilizando um Personal Access Token).*

---

### Passo 3: Ativar o GitHub Pages no Repositório
1. Na página do seu repositório no GitHub, clique na aba **`Settings`** (Configurações) no topo.
2. No menu lateral esquerdo, clique em **`Pages`** (abaixo de "Code and automation").
3. Na seção **Build and deployment**:
   - **Source:** selecione `Deploy from a branch`.
   - **Branch:** selecione `main` e deixe a pasta como `/(root)`.
4. Clique no botão **`Save`**.
5. Aguarde cerca de 1 a 2 minutos. Atualize a página e você verá uma mensagem verde com a URL do seu site no ar:
   > *"Your site is live at https://seu-usuario.github.io/"*

---

## 📱 URLs para cadastrar no Google Play Console e Apple Store

Assim que o site estiver ativo, cadastre estes links nas lojas:

1. **Website do Desenvolvedor (Ficha da Loja / Developer Profile):**
   `https://seu-usuario.github.io/`

2. **URL da Política de Privacidade (Obrigatório para aprovação de apps com permissões de armazenamento/USB):**
   `https://seu-usuario.github.io/privacy-policy.html`

3. **E-mail de Suporte ao Usuário:**
   `engenheiro.paulo.cezar@gmail.com`

---

## 🏷️ Sugestões de Domínios Próprios Baratos (Caso decida comprar no futuro)

Se futuramente você desejar um endereço personalizado (como `paulocezar.dev.br` ou `paulodev.com.br`), o GitHub Pages permite conectar domínios próprios gratuitamente.

### 1. Onde Comprar pelo Menor Preço:
* **[Registro.br](https://registro.br):**
  - É o órgão oficial que regula os domínios brasileiros.
  - Custa apenas **R$ 40,00 por ano**.
  - Não tem pegadinha de anuidade cara no segundo ano (ao contrário de empresas que cobram R$ 10 no primeiro ano e R$ 150 no segundo).
  - Sugestões de nomes recomendados:
    - `paulocezar.dev.br` (Extremamente moderno e focado em desenvolvedores)
    - `paulodev.com.br`
    - `engenheiropaulo.com.br`

* **[Cloudflare Registrar](https://www.cloudflare.com/products/registrar/):**
  - Vende domínios a preço de custo (sem lucro sobre o registro).
  - Domínios `.dev` saem por aproximadamente US$ 12/ano com DNS e proteção gratuita.

### 2. Como Configurar no GitHub Pages:
Quando comprar seu domínio:
1. Vá nas **Settings** > **Pages** do seu repositório no GitHub.
2. No campo **Custom domain**, digite o seu domínio (ex: `www.paulocezar.dev.br`).
3. Marque a caixa **Enforce HTTPS** (o GitHub gera o certificado SSL automaticamente e grátis).
