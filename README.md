# 🧑‍💻 Portfólio Terminal - Desenvolvido com Next.js

![Next JS](https://img.shields.io/badge/Next.js-000000.svg?\&style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?\&style=for-the-badge\&logo=typescript\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?\&style=for-the-badge\&logo=tailwind-css\&logoColor=white)

<br>

## 🚀 Visão Geral

Este repositório abriga meu portfólio pessoal, desenvolvido com uma stack moderna e otimizada para performance e escalabilidade.

A interface simula um terminal interativo, proporcionando uma experiência única e criativa para apresentar minhas habilidades, projetos e trajetória profissional.

```

+-----------------------------------------------------+
| o o o               leandro@portfolio               |
+-----------------------------------------------------+
|                                                     |
|  Welcome to my professional portfolio.              |
|  Type 'help' to see the list of available commands. |
|                                                     |
|  leandro@portfolio:~$ whoami_                       |
|                                                     |
|  # Leandro M. L. C.                                 |
|  # Full Stack Web Developer | Web Scraper           |
|                                                     |
+-----------------------------------------------------+

```

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** – Framework React para aplicações modernas com renderização híbrida.
- **React** – Biblioteca para construção de interfaces de usuário.
- **TypeScript** – Tipagem estática e mais segurança para o desenvolvimento JavaScript.
- **Tailwind CSS** – Utilitário CSS para estilização rápida e altamente customizável.

---

## ⚙️ Como Rodar Localmente

Siga os passos abaixo para executar o projeto na sua máquina:

### 1. Clone o repositório

```bash
git clone https://github.com/leandromlc/my-portfolio.git
cd SEU-REPOSITORIO
````

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse no navegador

Abra [http://localhost:3000](http://localhost:3000) para visualizar o portfólio.

---

## ✏️ Personalização de Conteúdo

A personalização é simples. Todo o conteúdo (biografia, skills, experiências, etc.) está centralizado em um objeto de configuração.

Procure o arquivo onde os comandos estão definidos, como:

```bash
src/app/lib/terminal/executeCommand.ts
```

### Exemplo de comando `whoami`:

```ts
export const commands = {
  whoami: {
    title: "whoami",
    description: "Displays a short biography.",
    output: `
        <span class="text-output-green font-bold"># Leandro M. L. C.</span>
        <span class="text-output-cyan"># Full Stack Web Developer | Web Scraper</span>

        Here goes a brief biography about me..
    `,
  },
};
```

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usar, estudar e adaptar.

---

## 🤝 Vamos nos conectar!

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?\&style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/leandromlc/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?\&style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/leandromlc)
