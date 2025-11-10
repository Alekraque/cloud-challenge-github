# 🎶 M&Music Cloud – Projeto DevOps Tools e Cloud Computing

## ☁️ Visão Geral
O projeto **EASY WEATHER** foi desenvolvido para demonstrar a aplicação prática dos conceitos de **DevOps Tools e Cloud Computing**, utilizando **Infraestrutura como Serviço (IaaS)** na plataforma **Microsoft Azure**, com deploy automatizado via **Docker Compose**.

A solução integra uma aplicação **Node.js** e um banco de dados **PostgreSQL** em containers Docker, seguindo boas práticas de segurança, isolamento e persistência de dados.

---

## 🧩 Objetivos
- Provisionar uma **máquina virtual Linux (Ubuntu)** no Azure.  
- Instalar e configurar o **Docker Engine** e o **Docker Compose**.  
- Criar imagens e containers utilizando **Dockerfile** e **docker-compose.yml**.  
- Executar a aplicação em **background**, com **usuário não root**.  
- Demonstrar o **deploy completo**, monitoramento da VM e persistência de dados.  
- Excluir o grupo de recursos ao final, como evidência de encerramento.

---

## 🏗️ Arquitetura da Solução
A arquitetura do sistema é composta por dois containers principais:


Cada serviço é isolado e gerenciado via **Docker Compose**, garantindo escalabilidade, segurança e portabilidade.

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologia |
|------------|-------------|
| Cloud Provider | Microsoft Azure |
| Sistema Operacional | Ubuntu Server 22.04 LTS |
| Backend | Node.js |
| Banco de Dados | PostgreSQL 15 (Alpine) |
| Containerização | Docker e Docker Compose |
| Versionamento | Git + GitHub |
| Monitoramento | Azure Monitor / Docker Stats |
| Persistência | Volume Docker vinculado ao PostgreSQL |

---

## 🖥️ Etapas de Implantação

### 1️⃣ Provisionamento da Máquina Virtual

1. Acesse o portal da **Microsoft Azure**.  
2. Crie uma nova **máquina virtual Linux (Ubuntu Server 22.04 LTS)**.  
3. Configure:
   - Tamanho: `Standard B1s`
   - Porta liberada: `22` (SSH) e `3000` (aplicação)
   - Grupo de recursos exclusivo
4. Ative o **Azure Monitor** para acompanhar CPU, memória e rede.  
5. Após os testes, **delete o grupo de recursos** e capture a evidência.

---

### 2️⃣ Instalação do Docker e Docker Compose

Conecte-se à VM via SSH e execute os comandos abaixo:

```bash
# Atualiza pacotes
sudo apt update && sudo apt upgrade -y

# Instala Docker
sudo apt install docker.io -y

# Instala Docker Compose
sudo apt install docker-compose -y

# Verifica versões
docker -v
docker-compose -v

# Adiciona o usuário atual ao grupo docker (sem privilégios administrativos)
sudo usermod -aG docker $USER
exit


# Clonar o repositório
git clone https://github.com/Alekraque/cloud-challenge-github.git
cd m-music-cloud

# Subir os containers em background
docker-compose up -d --build

# Verificar se estão rodando
docker ps


http://<ip-da-vm>:3000


#estrutura do projeto
📁 m-music-cloud
├── 📄 Dockerfile
├── 📄 docker-compose.yml
├── 📄 README.md
├── 📁 src
│   └── app.js
└── 📁 data
