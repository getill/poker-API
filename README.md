# Poker-API

Une API de poker construite avec NestJS, utilisant Bun comme gestionnaire de paquets et runtime.

---

## ✨ Technologies principales

-   **Framework**: [NestJS](https://nestjs.com/)
-   **Runtime & Bundler**: [Bun](https://bun.sh/)
-   **Langage**: [TypeScript](https://www.typescriptlang.org/)
-   **Documentation API**: [Swagger (OpenAPI)](https://swagger.io/)
-   **Base de données**: [MongoDB](https://www.mongodb.com/)
-   **Validation & Sérialisation**: `class-validator` & `class-transformer`

---

## 🗄️ Base de données

Ce projet utilise **MongoDB** comme base de données. La configuration de la connexion est gérée via les variables d'environnement ou le fichier de configuration de NestJS.

---

## 🚀 Démarrage rapide

### Prérequis

Assurez-vous d'avoir installé [Bun](https://bun.sh/) sur votre machine.

### 1. Installation

Clonez le projet et suivez les étapes ci-dessous pour installer les dépendances.

<details>
  <summary><strong>Note importante sur l'installation</strong></summary>
  <p>Certaines dépendances de NestJS (comme <code>@nestjs/core</code>) peuvent rencontrer des problèmes lors d'une installation directe avec <code>bun install</code> à cause de scripts post-installation. La méthode suivante, bien qu'inhabituelle, assure une installation stable :</p>
  <ol>
    <li>Utiliser <code>npm</code> pour une première installation qui résout correctement les scripts.</li>
    <li>Supprimer le dossier <code>node_modules</code> généré par npm.</li>
    <li>Lancer <code>bun install</code> qui va créer un <code>node_modules</code> optimisé et le fichier <code>bun.lockb</code>.</li>
  </ol>
</details>

```bash
# Remplacez <URL_DU_REPO> par l'URL de votre dépôt
git clone <URL_DU_REPO>
cd nest-project

# Étape 1: Installation finale et rapide avec Bun
bun install
```

### 2. Lancement de l'application

#### Mode Développement

Pour démarrer le serveur en mode développement avec le rechargement automatique (hot-reloading) :

```bash
bun run start:dev
```

Le serveur sera alors accessible à l'adresse `http://localhost:3000`.

#### Mode Production

Pour construire l'application et la lancer en mode production :

```bash
# 1. Construire l'application
bun run build

# 2. Démarrer le serveur de production
bun run start:prod
```

---

## 🧪 Exécution des tests

Pour lancer les différentes suites de tests, utilisez les commandes suivantes :

```bash
# Lancer les tests unitaires
bun run test

# Lancer les tests End-to-End (e2e)
bun run test:e2e

# Lancer les tests avec la couverture de code
bun run test:cov
```

---

## 📚 Documentation de l'API

Ce projet intègre une documentation d'API interactive générée automatiquement avec Swagger.

Une fois l'application démarrée, vous pouvez accéder à l'interface Swagger via votre navigateur à l'adresse suivante :

### **[http://localhost:3000/api](http://localhost:3000/api)**

---

## 🐳 Déploiement avec Docker

Vous pouvez déployer l'application et ses services dépendants (comme MongoDB) facilement à l'aide de Docker Compose.

Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.

```bash
# Pour démarrer l'application et la base de données en arrière-plan
docker compose up -d

# Pour arrêter les services
docker compose down
```

L'API sera accessible sur `http://localhost:3000` et la base de données MongoDB sera disponible sur le port par défaut (généralement 27017) ou via le nom de service défini dans `compose.yml`.

---

## 📜 Licence

Ce projet est sous licence `UNLICENSED`.