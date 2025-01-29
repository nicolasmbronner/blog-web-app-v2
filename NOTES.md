# Planification du fonctionnement de l'application

## Vue d'ensemble
Blog Web App v2 est une application web dynamique permettant à plusieurs utilisateurs de créer, lire, modifier et supprimer des articles de blog en temps réel. L'application offre une expérience utilisateur fluide avec des fonctionnalités de collaboration et des retours visuels instantanés.

## Accès et connexion
L'application s'initialise automatiquement dès qu'un utilisateur y accède. Pour commencer :
1. Accédez à la page de connexion
2. Saisissez un pseudonyme pour identifier vos contributions
3. Cliquez sur "login" ou appuyez sur ENTER pour accéder au blog

Note : Le serveur maintient l'état du blog tant qu'au moins un utilisateur reste connecté. Lorsque le dernier utilisateur quitte l'application, le serveur réinitialise le blog à son état initial.

## Interface principale
### Personnalisation
- Un sélecteur de thème (clair/sombre) est disponible dans le coin supérieur droit de chaque page

### Page d'accueil
La page d'accueil présente une liste chronologique des articles, les plus récents apparaissant en premier. Chaque article affiche :
- Sa date de création (passe au nom de l'auteur au survol/toucher, en format de scroll horizontal automatique)
- Son titre
- Des indicateurs dynamiques :
  - Lecteurs actifs (icône animée)
  - État d'édition par l'auteur (icône animée)

### Interactions avec les articles
#### Sur ordinateur
- Survolez un article pour afficher les options d'édition et de suppression (les icônes remplacent les indicateurs dynamiques si présents)
- Cliquez sur le titre pour lire l'article

#### Sur appareil tactile
- Glissez vers la gauche pour supprimer
- Glissez vers la droite pour éditer
- Appui long sur le titre pour accéder aux options de suppression ou d'édition, apparaissant à côté du bouton de sélecteur de thème (5 secondes pour choisir une action)

## Gestion des articles
### Lecture
La page de lecture affiche :
- Titre de l'article
- Date de création
- Nom de l'auteur
- Contenu
- Indicateurs en temps réel, à droite du titre (lecteurs actifs, édition en cours, lecture en tampon car article supprimé)
- Options d'édition/suppression pour l'auteur
- Bouton de retour à l'accueil

### Création
Accessible via l'icône "+" depuis la page d'accueil :
- Champs pour le titre et le contenu
- Sauvegarde des sauts de ligne
- Validation activée uniquement avec contenu
- Option d'annulation avec possibilité de restauration

### Édition
Disponible uniquement pour l'auteur :
- Modification du titre et du contenu
- Indicateur de lecteurs actifs
- Sauvegarde avec retour à la lecture
- Annulation avec option de restauration

### Suppression
Accessible depuis la liste ou la lecture d'article :
- Animation de suppression
- Notification toast avec option d'annulation
- Redirection automatique vers l'accueil

## Fonctionnalités collaboratives
L'application offre une expérience en temps réel avec :
- Indicateurs de présence des lecteurs
- Notifications d'édition en cours
- Indicateur de lecture en cache, car l'article a été supprimé par son auteur
- Mises à jour instantanées des modifications, sauf pour les lecteurs déjà sur la page, qui verront le texte grisé avec un indicateur que l'article a été modifié et a besoin d'être actualisé pour voir la dernière version de l'article
- Système de notification pour les actions importantes

## Accessibilité
L'interface s'adapte aux différents appareils :
- Navigation adaptée tactile/souris
- Options accessibles via différentes méthodes d'interaction
- Retours visuels clairs des actions
- Système d'annulation pour toutes les actions importantes

# Routes nécessaires

# Pages à créer
