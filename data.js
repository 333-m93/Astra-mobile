window.ASTRA_DATA = {
  categories: ["Tous", "Mots de passe", "Phishing", "Reseaux sociaux", "Appareils", "Vie privee", "Famille"],
  incidentSteps: [
    "Coupe temporairement les connexions des comptes sensibles.",
    "Change tes mots de passe depuis un appareil sain.",
    "Active la double authentification partout ou c'est possible.",
    "Previens tes proches si un compte a servi a envoyer des messages.",
    "Rassemble les preuves: captures, liens, horodatage, emails.",
    "Contacte la plateforme ou le support concerné sans attendre."
  ],
  tips: [
    {
      id: "tip-1",
      category: "Mots de passe",
      title: "Utilise une phrase de passe longue",
      body: "Une phrase longue, unique et facile a retenir est plus solide qu'un mot court avec des caracteres ajoutés au hasard.",
      notes: ["Exemple: 'CafeBleu-Route-Lune-29!'", "Evite les motifs evidents comme l'année de naissance.", "Ne reutilise jamais le meme secret sur plusieurs comptes."],
      icon: "🔐",
      featured: true
    },
    {
      id: "tip-2",
      category: "Phishing",
      title: "Verifie toujours l'adresse de l'expediteur",
      body: "Les messages frauduleux copient souvent le style d'une vraie marque mais utilisent un domaine legerement modifie ou etrange.",
      notes: ["Regarde le nom de domaine complet.", "Mefie-toi des fautes et de l'urgence artificielle.", "Passe par le site officiel au lieu de cliquer dans le message."],
      featured: true
    },
    {
      id: "tip-3",
      category: "Reseaux sociaux",
      title: "Active la double authentification",
      body: "Le mot de passe seul ne suffit plus. La 2FA ajoute une couche de securite essentielle contre le vol de compte.",
      notes: ["Privilégie une application d'authentification.", "Sauvegarde les codes de secours.", "Active la 2FA sur les messages, le mail et les reseaux."],
      featured: true
    },
    {
      id: "tip-4",
      category: "Appareils",
      title: "Installe les mises a jour sans attendre",
      body: "Les correctifs referment des failles exploitees par les attaquants. Un appareil non mis a jour reste une cible facile.",
      notes: ["Active les mises a jour automatiques.", "Redemarre regulierement tes appareils.", "Supprime les applications que tu n'utilises plus."],
      featured: false
    },
    {
      id: "tip-5",
      category: "Vie privee",
      title: "Revois les autorisations de tes applications",
      body: "Beaucoup d'applications demandent plus d'acces qu'elles n'en ont reellement besoin. Coupe ce qui n'est pas utile.",
      notes: ["Vérifie camera, micro, localisation et contacts.", "Garde seulement le minimum requis.", "Supprime les applis inutiles qui collectent trop."],
      featured: false
    },
    {
      id: "tip-6",
      category: "Famille",
      title: "Explique les arnaques aux proches",
      body: "Les attaques touchent souvent les personnes les plus pressées ou les moins habituées au numérique. Le partage d'information protege tout le monde.",
      notes: ["Montre des exemples concrets.", "Parlez des faux colis, faux concours et faux supports.", "Crée un mot de passe commun pour parler des urgences."],
      featured: false
    },
    {
      id: "tip-7",
      category: "Mots de passe",
      title: "Utilise un gestionnaire de mots de passe",
      body: "Un gestionnaire sécurisé crée, stocke et remplit automatiquement des secrets forts sans que tu aies besoin de les mémoriser tous.",
      notes: ["Protège le coffre par un mot de passe maitre fort.", "Sauvegarde la cle de récupération.", "Génère un mot de passe different pour chaque service."],
      featured: true
    },
    {
      id: "tip-8",
      category: "Phishing",
      title: "Mefie-toi des messages qui pressent",
      body: "Les fraudeurs veulent provoquer une reaction rapide. Plus le message pousse a agir vite, plus il faut ralentir.",
      notes: ["Ne clique pas sous la pression.", "Lis calmement l'intégralité du message.", "Compare avec les habitudes habituelles du service."],
      featured: false
    },
    {
      id: "tip-9",
      category: "Reseaux sociaux",
      title: "Limite ce que tout le monde peut voir",
      body: "Photos, telephone, e-mail et listes d'amis ne devraient pas etre publics par defaut si tu veux limiter le ciblage.",
      notes: ["Passe les comptes en mode prive.", "Cache ta date de naissance si possible.", "Supprime les publications trop informatives."],
      featured: false
    },
    {
      id: "tip-10",
      category: "Appareils",
      title: "Verrouille ton ecran avec un code solide",
      body: "Le code PIN simple ou les gestes faciles a deviner sont vite contournes. Un code long ou une authentification biométrique est preferable.",
      notes: ["Evite 1234, 0000 ou ta date de naissance.", "Active le verrouillage automatique rapide.", "Utilise Face ID ou empreinte en complement."],
      featured: true
    },
    {
      id: "tip-11",
      category: "Vie privee",
      title: "Nettoie tes sauvegardes et partages",
      body: "Les documents sensibles se retrouvent parfois dans des sauvegardes publiques, des liens partages ou de vieux dossiers oublies.",
      notes: ["Verifie les dossiers cloud partages.", "Supprime les liens d'acces devenus inutiles.", "Crypte ce qui doit rester confidentiel."],
      featured: false
    },
    {
      id: "tip-12",
      category: "Famille",
      title: "Aide les enfants a reconnaitre un faux jeu",
      body: "Les faux cadeaux et les tricheries en jeu en ligne sont des portes d'entrée vers le vol de compte ou l'installation de logiciels malveillants.",
      notes: ["Explique les achats suspects.", "Montre comment verifier un lien.", "Regle les achats et autorisations parentales."],
      featured: false
    },
    {
      id: "tip-13",
      category: "Mots de passe",
      title: "Ne reutilise jamais ton mot de passe principal",
      body: "Si un service fuite, tous les comptes qui utilisent le meme secret deviennent vulnerables en chaine.",
      notes: ["Chaque compte doit avoir un secret different.", "Change rapidement en cas de fuite connue.", "Utilise le coffre fort du gestionnaire."],
      featured: false
    },
    {
      id: "tip-14",
      category: "Phishing",
      title: "Ouvre les pieces jointes avec prudence",
      body: "Un document, une facture ou une archive peut contenir une macro, un lien piégé ou un contenu trompeur.",
      notes: ["Observe l'extension du fichier.", "Verifie le contexte avant d'ouvrir.", "N'active jamais les macros sans raison claire."],
      featured: true
    },
    {
      id: "tip-15",
      category: "Appareils",
      title: "Controle les acces Bluetooth et Wi-Fi",
      body: "Laisser des connexions ouvertes augmente le risque d'exposition. Coupe ce qui n'est pas utile au bon moment.",
      notes: ["Desactive les connexions inutiles.", "Oublie les vieux reseaux connus dangereux.", "Evite les hotspots inconnus pour les comptes sensibles."],
      featured: false
    },
    {
      id: "tip-16",
      category: "Reseaux sociaux",
      title: "Ignore les concours trop beaux pour etre vrais",
      body: "Les faux cadeaux servent souvent a collecter tes données ou a t'amener sur des pages piégées.",
      notes: ["Verifie le compte officiel.", "Observe l'anciennete du profil.", "Ne donne jamais d'info bancaire pour un lot."],
      featured: false
    },
    {
      id: "tip-17",
      category: "Vie privee",
      title: "Desactive le partage de localisation permanent",
      body: "La localisation en continu donne beaucoup d'informations sur tes habitudes et tes trajets.",
      notes: ["Autorise seulement quand c'est necessaire.", "Retire les acces des applis peu fiables.", "Verifie les photos geolocalisees."],
      featured: false
    },
    {
      id: "tip-18",
      category: "Famille",
      title: "Crée un mot de passe familial pour les urgences",
      body: "Un code simple a partager peut aider à verifier qu'un message ou un appel vient bien d'un proche.",
      notes: ["Choisis une phrase courte et commune.", "Ne l'utilise jamais pour ouvrir des comptes.", "Change-le si besoin apres un incident."],
      featured: false
    },
    {
      id: "tip-19",
      category: "Mots de passe",
      title: "Change immédiatement apres une fuite",
      body: "Lorsqu'un service est compromis, le temps joue contre toi. Mieux vaut agir vite que subir une prise de controle.",
      notes: ["Consulte si ton email a ete expose.", "Priorise les comptes mail et bancaires.", "Active les alertes de connexion."],
      featured: false
    },
    {
      id: "tip-20",
      category: "Phishing",
      title: "Verifie les liens avant de cliquer",
      body: "Un texte rassurant peut cacher une adresse malveillante. Sur mobile, fais apparaître l'aperçu de la destination avant d'ouvrir.",
      notes: ["Lis le lien complet.", "Regarde les domaines courts suspects.", "Mefie-toi des raccourcisseurs anonymes."],
      featured: false
    },
    {
      id: "tip-21",
      category: "Appareils",
      title: "Sauvegarde regulierement tes donnees",
      body: "Les sauvegardes reduisent fortement l'impact d'un vol, d'un malware ou d'une panne materielle.",
      notes: ["Garde une copie locale et une dans le cloud.", "Teste la restauration.", "Protege les sauvegardes par un mot de passe fort."],
      featured: true
    },
    {
      id: "tip-22",
      category: "Reseaux sociaux",
      title: "Controle les applications liees à ton compte",
      body: "Les services connectes peuvent garder des droits inutiles longtemps apres leur installation.",
      notes: ["Revois les applications autorisees.", "Supprime les integrations anciennes.", "Limite l'acces a tes donnees personnelles."],
      featured: false
    },
    {
      id: "tip-23",
      category: "Vie privee",
      title: "Nettoie les anciennes publications",
      body: "Les anciennes infos publiques peuvent aider un attaquant a deviner tes habitudes ou repondre à des questions de sécurité.",
      notes: ["Supprime les posts trop précis.", "Cache les photos sensibles.", "Revois tes parametres de partage."],
      featured: false
    },
    {
      id: "tip-24",
      category: "Famille",
      title: "Apprends à reconnaitre une fausse demande d'aide",
      body: "Les pirates imitent souvent un proche ou un service client pour obtenir de l'argent ou des codes de validation.",
      notes: ["Appelle toujours sur un canal connu.", "Demande une verification supplementaire.", "Ne communique jamais un code de securite reçu par SMS."],
      featured: true
    }
  ],
  quizzes: [
    {
      id: "quiz-basics",
      title: "Les bases essentielles",
      summary: "Un quiz court pour verifier les reflexes indispensables: mot de passe, 2FA et messages suspects.",
      level: "Debutant",
      questions: [
        {
          q: "Quelle est la meilleure pratique pour un mot de passe ?",
          options: ["Le reutiliser partout", "Le partager avec un proche", "Le rendre long et unique", "Utiliser uniquement des chiffres"],
          answer: 2,
          explanation: "Un mot de passe long, unique et difficile a deviner reste bien plus robuste."
        },
        {
          q: "Que protege la double authentification ?",
          options: ["La vitesse du telephone", "L'acces au compte meme si le mot de passe fuit", "La batterie", "Les photos"],
          answer: 1,
          explanation: "La 2FA ajoute une couche de securite si ton mot de passe est volé ou deviné."
        },
        {
          q: "Le meilleur reflexe face a un lien urgent et suspect ?",
          options: ["Cliquer vite", "Verifier le site officiel", "L'envoyer a tout le monde", "Le garder pour plus tard"],
          answer: 1,
          explanation: "Mieux vaut ouvrir le site officiel soi-même au lieu de suivre un lien piégé."
        }
      ]
    },
    {
      id: "quiz-phishing",
      title: "Anti-phishing",
      summary: "Repere les faux messages, les urgences artificielles et les pieces jointes piégees.",
      level: "Intermediaire",
      questions: [
        {
          q: "Quel indice est souvent suspect dans un mail frauduleux ?",
          options: ["Un ton calme", "Une adresse expéditeur bizarre", "Un logo", "Une signature"],
          answer: 1,
          explanation: "Une adresse légitime et une adresse frauduleuse ne se ressemblent pas toujours au premier coup d'oeil."
        },
        {
          q: "Pourquoi faut-il se mefier des messages très urgents ?",
          options: ["Parce qu'ils sont courts", "Parce qu'ils veulent te faire agir sans réfléchir", "Parce qu'ils sont en couleur", "Parce qu'ils sont en PDF"],
          answer: 1,
          explanation: "La pression temporelle est une technique classique pour contourner la vigilance."
        },
        {
          q: "Quelle attitude est la plus sûre face à une piece jointe inattendue ?",
          options: ["L'ouvrir si elle est jolie", "La transférer à quelqu'un d'autre", "Vérifier le contexte et le type de fichier", "La renommer"],
          answer: 2,
          explanation: "Le type de fichier, le contexte et l'expéditeur doivent toujours etre verifiés avant ouverture."
        },
        {
          q: "Que faire si tu as cliqué sur un faux lien ?",
          options: ["Ne rien faire", "Changer les identifiants concernés et surveiller les connexions", "Partager le lien", "Supprimer l'application"],
          answer: 1,
          explanation: "Il faut agir vite: changer les accès, couper les sessions et vérifier les messages envoyés."
        }
      ]
    },
    {
      id: "quiz-social",
      title: "Reseaux sociaux",
      summary: "Questions pratiques pour proteger tes profils, tes amis et tes donnees.",
      level: "Avance",
      questions: [
        {
          q: "Quel parametre reduit le plus l'exposition sur un reseau social ?",
          options: ["Publier plus", "Passer le compte en privé", "Ajouter des inconnus", "Garder les stories publiques"],
          answer: 1,
          explanation: "Le mode privé réduit immédiatement la surface d'attaque et le profilage public."
        },
        {
          q: "Pourquoi faut-il vérifier un message envoyé par un ami ?",
          options: ["Parce que son compte peut etre compromis", "Parce qu'il ment toujours", "Parce qu'il a changé de photo", "Parce qu'il a un surnom"],
          answer: 0,
          explanation: "Les comptes volés servent souvent à propager des arnaques à la place de vrais proches."
        },
        {
          q: "Quelle info vaut mieux ne pas afficher publiquement ?",
          options: ["Tes centres d'intérêt", "Ton adresse complète et ton numéro", "Ta couleur préférée", "Ton sport"],
          answer: 1,
          explanation: "Les données personnelles trop précises facilitent les attaques ciblées."
        }
      ]
    }
  ],
  utilityChecks: [
    "Mes comptes critiques ont-ils des mots de passe uniques ?",
    "La 2FA est-elle active sur mon email principal ?",
    "Ai-je vérifie les applications avec acces a mes donnees ?",
    "Mes appareils sont-ils a jour ?"
  ]
};
