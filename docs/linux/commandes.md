---
sidebar_position: 1
---

# Commandes

Ce document fournit une documentation complète des commandes Linux couramment utilisées. Chaque commande est accompagnée d'une description de son but, de sa syntaxe et d'exemples d'utilisation.

## Commande `ls`

La commande `ls` est utilisée pour lister les fichiers et les répertoires dans un répertoire.

### Syntaxe

```bash
ls [options] [répertoire]
````

### Options

- `-l`: Affiche les détails sous forme de liste.
- `-a`: Affiche les fichiers cachés.
- `-h`: Affiche les tailles de fichiers de manière lisible par l'homme.

### Exemple

```bash
ls -l /home/utilisateur
````

Cet exemple affiche une liste détaillée des fichiers et répertoires dans le répertoire `/home/utilisateur`.

## Commande `cd`

La commande `cd` est utilisée pour changer de répertoire.

### Syntaxe

```bash
cd [répertoire]
````

### Exemple

```bash
cd /dossier
````

Cela vous déplace dans le répertoire nommé "dossier".

## Commande `mkdir`

La commande `mkdir` est utilisée pour créer un nouveau répertoire.

### Syntaxe

```bash
mkdir [options] nom_dossier
````

### Exemple

```bash
mkdir nouveau_dossier
````
