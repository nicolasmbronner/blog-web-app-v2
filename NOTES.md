# Planification du fonctionnement de l'application

### Vue d'ensemble
Blog Web App v2 est une application web permettant à plusieurs utilisateurs de créer, lire, modifier et supprimer des articles de blog. L'application offre une expérience utilisateur fluide avec des retours visuels et une interface adaptée aux appareils tactiles.

### Accès et connexion
L'application s'initialise automatiquement dès qu'un utilisateur y accède. Pour commencer :
1. Accédez à la page de connexion
2. Saisissez un pseudonyme pour identifier vos contributions ou cliquez sur "I just want to visit :)"
3. Cliquez sur "login" ou appuyez sur ENTER pour accéder au blog

Important : La persistance des données dépend de la présence d'utilisateurs actifs. Tant qu'au moins un utilisateur ou visiteur est connecté au site (maintient un onglet ouvert), le blog persiste avec son contenu actuel. Dès que le dernier utilisateur ou visiteur ferme son onglet du site, le blog se réinitialise automatiquement à son état par défaut.

### Interface principale
#### Personnalisation
- Un sélecteur de thème (clair/sombre) est disponible dans le coin supérieur droit de chaque page

#### Page d'accueil
La page d'accueil présente une liste chronologique des articles, les plus récents apparaissant en premier. Chaque article affiche :
- Sa date de création (passe au nom de l'auteur au survol/toucher, avec défilement horizontal automatique du nom)
- Son titre
- Bouton "+" en haut à droite, à côté du sélecteur de thème (visible uniquement pour les utilisateurs connectés)

#### Interactions avec les articles
##### Sur ordinateur
- Survolez un article pour afficher les options d'édition et de suppression (pour l'auteur uniquement)
- Cliquez sur le titre pour lire l'article

##### Sur appareil tactile
- Glissez vers la gauche pour supprimer (pour l'auteur uniquement)
- Glissez vers la droite pour éditer (pour l'auteur uniquement)
- Appui simple sur le titre pour lire l'article

### Gestion des articles
#### Lecture
La page de lecture affiche :
- Titre de l'article
- Date de création
- Nom de l'auteur
- Contenu
- Options d'édition/suppression pour l'auteur
- Bouton de retour à l'accueil

#### Création
Accessible via le bouton "+" depuis la page d'accueil :
- Champs pour le titre et le contenu
- Sauvegarde des sauts de ligne
- Validation activée uniquement avec contenu
- Toast d'annulation lors du retour, avec option "rétablir" pendant 10 secondes pour revenir à la page de création avec le contenu précédent

#### Édition
Disponible uniquement pour l'auteur :
- Modification du titre et du contenu
- Sauvegarde avec retour à la lecture
- Toast d'annulation lors du retour, avec option "rétablir" pendant 10 secondes pour revenir à la page d'édition avec le contenu précédent

#### Suppression
Accessible depuis la liste ou la lecture d'article :
- Animation de suppression
- Toast de confirmation avec option "annuler" pendant 10 secondes pour restaurer l'article
- Redirection automatique vers l'accueil

Note sur les toasts : Tous les toasts du système restent affichés pendant au moins 10 secondes, donnant suffisamment de temps à l'utilisateur pour changer d'avis et revenir sur ses actions si nécessaire.

### Accessibilité
L'interface s'adapte aux différents appareils :
- Navigation adaptée tactile/souris
- Options accessibles via différentes méthodes d'interaction
- Retours visuels clairs des actions

# Routes de l'application (Architecture REST)
### Routes GET
  - `/login` : Page de connexion (accès public)
  - `/` : Page d'accueil avec liste des articles (accès public)
  - `/articles/:id` : Lecture d'article (accès public)
  - `/articles/new` : Formulaire de création d'article (requiert pseudonyme)
  - `/articles/:id/edit` : Formulaire d'édition d'article (requiert être l'auteur)

### Routes POST
- `/articles` : Crée un nouvel article (requiert pseudonyme)

### Routes PUT
- `/articles/:id` : Met à jour un article (requiert être l'auteur)

### Routes DELETE
- `/articles/:id` : Supprime un article (requiert être l'auteur)

### Note
Les articles sont stockés dans un tableau d'objets dans `index.js`, servant de base de données en mémoire.

# Pages à créer
- Page de login
- Page d'accueil "Index"
- Page de lecture d'article
- Page d'édition d'article
- Page de nouvel article
- Page d'erreur 404

# Middleware
- Vérification de connexion avec pseudonyme pour création d'articles
- Vérification du statut auteur pour édition/suppression
- Gestion des erreurs 404 pour articles non trouvés