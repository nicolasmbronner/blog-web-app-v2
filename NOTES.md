# Planification du fonctionnement de l'application
- En ouvrant le site sur un nouvel onglet, à partir du moment où il y a au moins un utilisateur,
      le serveur s'initialise, Si après plusieurs fermetures d'onglets du site au moins un utilisateur
      reste dessus, le serveur perdure. Quand plus aucun utilisateur n'est sur le site (tous les onglet
      fermés), le serveur  réinitialise le blog à son état d'usine.
  
- Quand un utilisateur ouvre le site, il est amené sur une page de connexion. On lui demande
      simplement un pseudonyme qui servira à l'identifier pour les articles qu'il écrira. Une fois le
      pseudo entré, il clique sur un bouton "login" (ou ENTER) et arrive dans la page d'index du blog.
      Sur cette page comme sur toutes les autres du blog, en haut à droite, dans la barre de menu, on
      voit une icône permettant de changer le thème du blog (clair ou foncé).
  
- Depuis l'index, l'utilisateur peut consulter une liste de tous les articles existants, les plus récents
      étant au-dessus. Chaque ligne d'article indique sa date de création et son titre. Promener la souris sur
      une ligne / clic touch sur la date remplace cette date par le nom du créateur de l'article. Il y a des icônes
      animées pouvant se rajouter en tronquant la fin du titre de l'article : un utilisateur ou plus sont en train
      de consulter l'article ; l'auteur de l'article est en train de l'éditer. Aussi, promener la souris sur un
      titre fait apparaitre des icônes d'interaction tout à droite : éditer ou supprimer l'article. Sur 
      appareil touch, swiper vers la gauche permet de supprimer l'article, et swiper vers la droite permet de
      l'éditer. Maintenir un clic touch sur le titre met la ligne en surbrillance, et les icônes d'édition et
      de suppression apparaissent dans la barre des menus en haut à droite, avec un compte à rebours laissant
      5 secondes à l'utilisateur pour choisir, avant que les boutons ne disparaissent d'eux-mêmes.
  
- L'utilisateur peut consulter un article, ce qui l'amène sur la page d'affichage d'article, remplie par
      le titre, date, auteur, et corps de texte retrouvé par l'ID unique de l'article. Des icônes animées
      peuvent apparaitre à droite du titre selon que l'article est en train d'être lu par d'autres utilisateurs,
      ou que l'auteur est en train de le modifier, ou que l'article a été supprimé par son créateur ou un admin,
      et que l'article n'est que visible localement jusqu'au prochain chargement de page. Si l'article consulté
      est créé par le lecteur, une option d'édition ou de suppression apparaissent en haut à droite dans la
      barre de menus, et tous les utilisateurs voient en haut à gauche une flèche pour revenir sur la page
      d'index du blog.
  
- L'utilisateur peut éditer ses propres articles. Sur cette page d'édition, l'article apparait comme
      en mode lecture mais sans la date de création et le nom de l'auteur, juste le titre et le corps du texte.
      Comme en mode lecture, si des utilisateurs sont en train de lire l'article pendant qu'on l'édite, une 
      icône animée apparaît pour nous le faire savoir. Dans la barre de menu en haut, à droite on peut voir
      une icône pour valider la modification de l'article, et à gauche une flèche pour revenir en arrière. Si
      on clique sur la validation, nos modifications de l'article sont sauvée et on est ramené en mode lecture.
      Si on clique sur la flèche pour revenir en arrière, on est ramené à l'index du blog. Un petit toast
      apparait alors en bas à gauche de l'écran, nous indiquant qu'on vient d'annuler l'édition de l'article,
      avec un lien cliquable pour annuler cette action et revenir sur la page d'édition, là où on l'avait
      laissée.
  
- L'utilisateur peut supprimer ses propres articles, soit depuis l'index, soit depuis la lecture du-dit
      article (icône dans barre de menu en haut à droite). D'où que soit originée cette action, on est ramené
      à la page d'index et on voit l'article disparaître de la liste avec une animation simple. Un petit toast
      apparait également en bas à gauche de l'écran pour nous notifier de cette suppression d'article, avec un
      lien cliquable pour ramener l'article à la vie.

# Routes nécessaires

# Pages à créer
