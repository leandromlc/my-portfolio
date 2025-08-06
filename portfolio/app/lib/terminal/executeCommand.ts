import dedent from "ts-dedent";

const commands: { [key: string]: string } = {
  whoami: dedent(`
    <span class="text-output-green font-bold"># Leandro M. L. C.</span>
    <span class="text-output-cyan font-bold"># Crawler & Scraper Developer </span>

    Atuo atualmente na Volix, aplicando meus conhecimentos em automação e inteligência de mercado para desenvolver soluções eficientes e escaláveis de extração e processamento de dados.

    Sou formado em Desenvolvimento Web Full Stack pela Kenzie Academy Brasil e estou cursando Ciência da Computação na Cruzeiro do Sul Virtual, buscando sempre aprimorar minhas habilidades em desenvolvimento de sistemas e cibersegurança.

    Sou motivado por desafios técnicos e busco constantemente entregar soluções de alto impacto e valor estratégico.
    `),
  skills: dedent(`
    <span class="text-output-cyan">[Languages]</span>
    - Python      - TypeScript    - JavaScript
    - React

    <span class="text-output-cyan">[Cloud & DevOps]</span>
    - GCP Cloud Run Jobs    - Cloud Storage    - BigQuery
    - VMs                   - GitHub Actions (CI/CD)

    <span class="text-output-cyan">[Databases]</span>
    - BigQuery
    `),
  experience: dedent(`
    <span class="text-output-cyan">[2024-Present] Crawler & Scraper Developer @ Volix-Price-Tech</span>
    - Desenvolvimento de crawlers e sistemas de automação para inteligência de mercado.
    - Utilização de técnicas avançadas com proxies, anti-bot, paralelização e extração em larga escala.
    - Criação de pipelines de dados escaláveis com integração a serviços de nuvem (GCP).
    `),
  projects: dedent(`
    <span class="text-output-cyan">1. [parallel-scraper-job]</span>
      - Desc: Python crawler containerizado e executado como Cloud Run Job com distribuição paralela de tarefas e gerenciamento de proxies.

    <span class="text-output-cyan">2. [ci-cd-pipelines]</span>
      - Desc: Auxílio na criação de workflows automatizados de CI/CD usando GitHub Actions, com armazenamento seguro de segredos em ambientes.

    <span class="text-output-cyan">3. [scraping-systems]</span>
      - Desc: Desenvolvimento de scrapers com reprocessamento e armazenamento em Cloud Storage, seguindo arquitetura de microsserviços.

    <span class="text-output-cyan">4. [proxy-monitor]</span>
      - Desc: Ferramenta de monitoramento de proxies para consulta e verificação da disponibilidade dos pools de proxies.

    <p class="text-output-cyan">* Os links não estão disponíveis publicamente, pois os projetos são privados.</p>
    `),
  contact: dedent(`
    - LinkedIn: <a href="https://www.linkedin.com/in/leandromlc/" target="_blank" class="text-blue-400 underline">https://www.linkedin.com/in/leandromlc/</a>
    - GitHub:   <a href="https://github.com/leandromlc" target="_blank" class="text-blue-400 underline">https://github.com/leandromlc</a>
    - Email:    <a href="mailto:lourenco.contato1@gmail.com" class="text-blue-400 underline">lourenco.contato1@gmail.com</a>
    `),
  help: dedent(`
    Available commands:
    <span class="text-output-green">whoami</span>          - Exibe uma breve biografia.
    <span class="text-output-green">skills</span>          - Lista minhas principais habilidades técnicas.
    <span class="text-output-green">experience</span>      - Mostra meu histórico profissional.
    <span class="text-output-green">projects</span>        - Lista alguns dos meus projetos em destaque.
    <span class="text-output-green">contact</span>         - Mostra informações de contato e links sociais.
    <span class="text-output-green">clear</span>           - Limpa a tela do terminal.
    <span class="text-output-green">all</span>             - Executa todos os comandos de uma vez.
    `),
};

interface ExecuteCommandParams {
  command: string;
  outputElement: HTMLDivElement;
  scrollToBottom: () => void;
}

const printOutput = (
  htmlContent: string,
  outputElement: HTMLDivElement,
  scrollToBottom: () => void
) => {
  const div = document.createElement("div");
  div.style.whiteSpace = "pre-wrap";
  div.innerHTML = htmlContent;

  outputElement.appendChild(div);
  scrollToBottom();
};

export const executeCommand = async ({
  command,
  outputElement,
  scrollToBottom,
}: ExecuteCommandParams) => {
  switch (command) {
    case "clear":
      outputElement.innerHTML = "";
      break;

    case "all":
      for (const cmd of ["whoami", "skills", "experience", "projects", "contact"]) {
        const promptLine = document.createElement("div");

        promptLine.innerHTML = `
          <br>
          <span class="text-prompt">
            leandro@portfolio:~$
          </span>
          <span class="text-output-white">
            ${cmd}
          </span>
        `;
        outputElement.appendChild(promptLine);
        printOutput(commands[cmd], outputElement, scrollToBottom);

        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      break;

    default:
      if (commands[command]) {
        printOutput(commands[command], outputElement, scrollToBottom);
      } 
      else {
        printOutput(
          `Command not found: ${command}. Type 'help' for a list of commands.`,
          outputElement,
          scrollToBottom
        );
      }
      break;
  }
};
