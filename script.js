// Données des produits avec les informations détaillées
const productData = {
    // Suminagashi
    "santoku-sum": {
        name: "Santoku Suminagashi",
        price: "210€",
        description: "Le Santoku est un des couteaux japonais les plus connus. Il signifie « trois vertus » en japonais. Ses fameuses 3 vertus sont sa capacité à couper le poisson, la viande et les fruits & légumes.",
        characteristics: [
            "• Lame : Acier Inox Damas Suminagashi 67 couches VG 10",
            "• Manche : Défense de Phacochère (Sénégal), If (France), Ébène (Gabon)",
            "• Dimensions : Long. 308 mm • lame 172 mm • Larg. 40 mm",
            "• Poids : 140 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-suminagashi/Santoku-sum-1.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Santoku-sum-2.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Santoku-sum-3.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Santoku-sum-4.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Santoku-sum-5.jpeg"
        ]
    },
    "kiritsuke-sum": {
        name: "Kiritsuke Suminagashi",
        price: "190€",
        description: "Kiritsuke signifie en japonais \"fendre\". Le couteau Kiritsuke est doté d'un dos de lame droit qui tombe vers la pointe à la manière d'un katana japonais.",
        characteristics: [
            "• Lame : Acier Inox Damas Suminagashi 67 couches VG 10",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 352 mm • lame 203 mm • Larg. 40 mm",
            "• Poids : 189 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-suminagashi/Kiritsuke-sum-1.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kiritsuke-sum-2.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kiritsuke-sum-3.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kiritsuke-sum-4.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kiritsuke-sum-5.jpeg"
        ]
    },
    "nakiri-sum": {
        name: "Nakiri Suminagashi",
        price: "190€",
        description: "Le Nakiri bôchô se traduit par couteau pour la coupe des légumes verts. Sa forme rectangulaire si particulière qui lui vaut le sobriquet de \"couteau pelle\", surnom qui lui va comme un gant car on peut s'en servir pour transporter herbes et légumes coupés finement de la planche à découper à la casserole.",
        characteristics: [
            "• Lame : Acier Inox Damas Suminagashi 67 couches VG 10",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 307 mm • lame 172 mm • Larg. 50 mm",
            "• Poids : 180 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-suminagashi/Nakiri-sum-1.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Nakiri-sum-2.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Nakiri-sum-3.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Nakiri-sum-4.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Nakiri-sum-5.jpeg"
        ]
    },
    "honesuki-sum": {
        name: "Honesuki Suminagashi",
        price: "140€",
        description: "Le Honesuki, qui se traduit par \"amoureux des os\" est un couteau japonais initialement conçu pour la préparation de la volaille, mais également efficace pour l'apprêtage de petits poissons.",
        characteristics: [
            "• Lame : Acier Inox Damas Suminagashi 67 couches VG 10",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 280 mm • lame 148 mm • Larg. 40 mm",
            "• Poids : 106 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-suminagashi/Honesuki-sum-1.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Honesuki-sum-2.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Honesuki-sum-3.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Honesuki-sum-4.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Honesuki-sum-5.jpeg"
        ]
    },
    "kudamono-sum": {
        name: "Kudamono Suminagashi",
        price: "140€",
        description: "Le Kudamono ou couteau d'office sert au nettoyage et à la découpe des légumes. C'est un couteau rigide qui se caractérise en outre par un bout pointu. Sa petite taille le rend donc extrêmement maniable et permet d'effectuer des découpes fines et précises. Éplucher, découper, tailler, il sait tout faire.",
        characteristics: [
            "• Lame : Acier Inox Damas Suminagashi 67 couches VG 10",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 216 mm • lame 95 mm • Larg. 24 mm",
            "• Poids : 65 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-suminagashi/Kudamono-sum-1.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kudamono-sum-2.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kudamono-sum-3.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kudamono-sum-4.jpeg",
            "assets/Photos-couteaux/Gamme-suminagashi/Kudamono-sum-5.jpeg"
        ]
    },
    // Tsuchime
    "bunka-tsu": {
        name: "Bunka Tsuchime",
        price: "160€",
        description: "Bunka bôchô se traduit littéralement par le couteau de cuisine (bôchô) culturel (bunka). Car c'est LE couteau japonais par essence. Le Bunka s'utilise comme un couteau Santoku (sa lame est entre le Guyto et le Santoku) mais sa forme lui donne un aspect plus traditionnel, car sa pointe ressemble un peu à celle d'un katana, comme celui du Kiritsuke.",
        characteristics: [
            "• Lame : 14C28N",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 290 mm • lame 156 mm • Larg. 45 mm",
            "• Poids : 144 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-Tsuchime/Bunka-tsu-1.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Bunka-tsu-2.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Bunka-tsu-3.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Bunka-tsu-4.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Bunka-tsu-5.jpeg"
        ]
    },
    "kiritsuke-tsu": {
        name: "Kiritsuke Tsuchime",
        price: "160€",
        description: "Kiritsuke signifie en japonais \"fendre\". Le couteau Kiritsuke est doté d'un dos de lame droit qui tombe vers la pointe à la manière d'un katana japonais.",
        characteristics: [
            "• Lame : 14C28N",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 330 mm • lame 193 mm • Larg. 45 mm",
            "• Poids : 171 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-Tsuchime/Kiritsuke-tsu-1.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Kiritsuke-tsu-2.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Kiritsuke-tsu-3.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Kiritsuke-tsu-4.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Kiritsuke-tsu-5.jpeg"
        ]
    },
    "nakiri-tsu": {
        name: "Nakiri Tsuchime",
        price: "160€",
        description: "Le Nakiri bôchô se traduit par couteau pour la coupe des légumes verts. Sa forme rectangulaire si particulière qui lui vaut le sobriquet de \"couteau pelle\", surnom qui lui va comme un gant car on peut s'en servir pour transporter herbes et légumes coupés finement de la planche à découper à la casserole.",
        characteristics: [
            "• Lame : 14C28N",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 312 mm • lame 180 mm • Larg. 49 mm",
            "• Poids : 182 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-Tsuchime/Nakiri-tsu-1.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Nakiri-tsu-2.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Nakiri-tsu-3.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Nakiri-tsu-4.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Nakiri-tsu-5.jpeg"
        ]
    },
    "honesuki-tsu": {
        name: "Honesuki Tsuchime",
        price: "120€",
        description: "Le Honesuki, qui se traduit par \"amoureux des os\" est un couteau japonais initialement conçu pour la préparation de la volaille, mais également efficace pour l'apprêtage de petits poissons.",
        characteristics: [
            "• Lame : 14C28N",
            "• Manche : Bois de Palmier (Bali), Buis (France), Padouk (Afrique)",
            "• Dimensions : Long. 283 mm • lame 152 mm • Larg. 40 mm",
            "• Poids : 110 g"
        ],
        images: [
            "assets/Photos-couteaux/Gamme-Tsuchime/Honesuki-tsu-1.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Honesuki-tsu-2.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Honesuki-tsu-3.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Honesuki-tsu-4.jpeg",
            "assets/Photos-couteaux/Gamme-Tsuchime/Honesuki-tsu-5.jpeg"
        ]
    },
    // Puukko
    "puukko-vert": {
        name: "Puukko Vert",
        price: "140€",
        description: "L'acier X50CrMoV15 présente des qualités inhérentes à une lame destinée à durer. Comme souvent chez les aciers efficaces, il se distingue par trois atouts : • Une teneur en chrome exceptionnelle, ce qui en fait un acier inox de référence. • Un apport en molybdène qui renforce la résistance à la corrosion déjà élevée. • Une touche de vanadium bienvenue qui renforce les effets du carbone et assouplit la lame. Grâce à ces trois caractéristiques, le X50CrMoV15 est un acier extrêmement résistant à la corrosion et aux chocs.",
        characteristics: [
            "• Lame : X50CrMov15",
            "• Manche : Laiton, Juma Gem violet, Bois de Palmier (Cocos nucifera) Bali, Ivoire de substitution : Elforyn Super Tusk",
            "• Dimensions : Long. 242 mm • lame 125 mm • Larg. 30 mm",
            "• Poids : 138 g"
        ],
        images: [
            "assets/Photos-couteaux/Puukko/Puukko-vert-1.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vert-2.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vert-3.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vert-4.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vert-5.jpeg"
        ]
    },
    "puukko-vio": {
        name: "Puukko Violet",
        price: "110€",
        description: "L'acier au carbone 80CrV2 est très apprécié pour la fabrication de lames de couteaux. C'est une nuance adaptée à la fabrication de couteaux Outdoor ou utilitaires en carbone. On la retrouve d'ailleurs assez couramment dans le nord de l'Europe pour fabriquer le Puuko, un couteau utilitaire simple et robuste.",
        characteristics: [
            "•Lame : 80CrV2",
            "•Manche : Laiton, Juma Gem violet, Bouleau madré de Carélie (Betula pendula) Finlande, Padouk (Pterocarpus soyauxii) Afrique, Ivoire de substitution : Elforyn Super Tusk",
            "•Dimensions : Long. 213 mm • lame 92 mm • Larg. 27 mm",
            "•Poids : 109 g"
        ],
        images: [
            "assets/Photos-couteaux/Puukko/Puukko-vio-1.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vio-2.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vio-3.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vio-4.jpeg",
            "assets/Photos-couteaux/Puukko/Puukko-vio-5.jpeg"
        ]
    },
    // Accessoires
    "porte-kantanake": {
        name: "Porte-couteau Kantanake",
        price: "Sur demande",
        description: "Porte-couteau magnétique en bois Kantanake, fabrication artisanale.",
        characteristics: [
            "• Matériau : Bois Kantanake",
            "• Système magnétique",
            "• Fabrication artisanale"
        ],
        images: [
            "assets/Photos-couteaux/Accessoires/Porte_couteau_Kantanake.jpg"
        ]
    },
    "porte-6couteaux": {
        name: "Porte 6 couteaux",
        price: "Sur demande",
        description: "Porte-couteau magnétique pour 6 couteaux, fabrication artisanale.",
        characteristics: [
            "• Capacité : 6 couteaux",
            "• Système magnétique",
            "• Fabrication artisanale"
        ],
        images: [
            "assets/Photos-couteaux/Accessoires/Porte_6couteaux.jpeg"
        ]
    },
    // Nouveaux porte-couteaux
    "porte-xl-yakisugi": {
        name: "Porte-couteaux Taille XL Yakizugi",
        price: "60€",
        description: "Porte-couteau magnétique chêne massif, bandeau en Yakizugi (technique japonaise de bois brulé)",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 400 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 680 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/1-Porte-couteaux-GM-yakisugi.jpg"
        ]
    },
    "porte-xl-loupeorme-2": {
        name: "Porte-couteaux Taille XL Loupe d'Orme",
        price: "60€",
        description: "Porte-couteau magnétique chêne massif, bandeau en loupe d'orme",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 400 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 680 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/2-Porte-couteaux-GM-loupeorme.jpg"
        ]
    },
    "porte-xl-frene": {
        name: "Porte-couteaux Taille XL Frêne",
        price: "60€",
        description: "Porte-couteau magnétique chêne massif, Frêne",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 400 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 680 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/3-Porte-couteaux-GM-frene.jpg"
        ]
    },
    "porte-xl-loupeorme-4": {
        name: "Porte-couteaux Taille XL Loupe d'Orme",
        price: "60€",
        description: "Porte-couteau magnétique chêne massif, bandeau en loupe d'orme",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 400 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 680 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/4-Porte-couteaux-GM-loupeorme.jpg"
        ]
    },
    "porte-m-loupeorme-5": {
        name: "Porte-couteaux Taille M Loupe d'Orme",
        price: "50€",
        description: "Porte-couteau magnétique chêne massif, bandeau en loupe d'orme",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 340 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 590 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/5-Porte-couteaux-MM-loupeorme.jpg"
        ]
    },
    "porte-m-bleu": {
        name: "Porte-couteaux Taille M Bleu",
        price: "50€",
        description: "Porte-couteau magnétique chêne massif, bandeau bois teinté bleu",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 340 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 590 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/6-Porte-couteaux-MM-bleu.jpg"
        ]
    },
    "porte-m-loupeorme-7": {
        name: "Porte-couteaux Taille M Loupe d'Orme",
        price: "50€",
        description: "Porte-couteau magnétique chêne massif, bandeau en loupe d'orme",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 340 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 590 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/7-Porte-couteaux-MM-loupeorme.jpg"
        ]
    },
    "porte-m-loupeorme-8": {
        name: "Porte-couteaux Taille M Loupe d'Orme",
        price: "50€",
        description: "Porte-couteau magnétique chêne massif, bandeau en loupe d'orme",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 340 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 590 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/8-Porte-couteaux-MM-loupeorme.jpg"
        ]
    },
    "porte-s-yakisugi-9": {
        name: "Porte-couteaux Taille S Yakizugi",
        price: "40€",
        description: "Porte-couteau magnétique chêne massif, bandeau en Yakizugi(technique japonaise de bois brulé)",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 300 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 460 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/9-Porte-couteaux-PM-yakisugi.jpg"
        ]
    },
    "porte-s-yakisugi-10": {
        name: "Porte-couteaux Taille S Yakizugi",
        price: "40€",
        description: "Porte-couteau magnétique chêne massif, bandeau en Yakizugi(technique japonaise de bois brulé)",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 300 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 460 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/10-Porte-couteaux-PM-yakisugi.jpg"
        ]
    },
    "porte-s-rouge": {
        name: "Porte-couteaux Taille S Rouge",
        price: "40€",
        description: "Porte-couteau magnétique chêne massif, bandeau bois teinté rouge",
        characteristics: [
            "• Aimants Neodyme N52",
            "• Dimensions : Long.env. 320 mm • largeur 80 mm • Epaisseur 20 mm",
            "• Poids : env. 480 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/11-Porte-couteaux-rouge.jpg"
        ]
    },
    "bloc-loupeorme": {
        name: "Bloc Porte-couteaux Loupe d'orme",
        price: "70€",
        description: "Bloc en loupe d'orme massif contre collé",
        characteristics: [
            "• Dimensions : Hauteur 150 mm • largeur 80 mm • Epaisseur 70 mm",
            "• Poids : env. 496 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/14-Porte-couteau-orme-1.jpeg",
            "assets/Accessoires/Photos-porte-couteaux/15-Porte-couteau-orme-2.jpeg",
            "assets/Accessoires/Photos-porte-couteaux/16-Porte-couteau-orme-3.jpeg",
            "assets/Accessoires/Photos-porte-couteaux/17-Porte-couteau-orme-4.jpeg",
            "assets/Accessoires/Photos-porte-couteaux/18-Porte-couteau-orme-5.jpeg"
        ]
    },
    "bloc-hetre": {
        name: "Bloc Porte-couteaux Hêtre",
        price: "70€",
        description: "Bloc en hêtre massif sculpté",
        characteristics: [
            "• Dimensions : Hauteur 130 mm • diamètre 80 mm",
            "• Poids : env. 496 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/19-Porte-couteau-hetre-1.jpeg",
            "assets/Accessoires/Photos-porte-couteaux/20-Porte-couteau-hetre-2.jpeg"
        ]
    },
    "porte-katanakake": {
        name: "Porte couteau Katanakake",
        price: "30€",
        description: "Mettez en Scène Votre Couteau comme un sabre japonais !",
        characteristics: [
            "• Bois Red Cedar",
            "• Dimensions : Longueur 215 mm • largeur 40 mm • Hauteur 100 mm",
            "• Poids : 28 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/21-Porte_couteau_Kantanake-masque.jpg"
        ]
    },
    "porte-5couteaux": {
        name: "Porte couteau de collection 5 couteaux",
        price: "60€",
        description: "Mettez en Scène Votre Collection\nNe cachez plus vos couteaux. Ce Porte-Couteaux d'Exposition Vertical est conçu pour les lames qui méritent d'être vues.\nC'est la solution idéale pour transformer votre collection en véritable pièce maîtresse de votre cuisine ou atelier.",
        characteristics: [
            "• Bois de noisetier et Spruce",
            "• Dimensions : Largeur 435 mm Profondeur 80 mm Hauteur 380 mm",
            "• Poids : env. 1130 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/22-Porte_5couteaux_masque.jpg"
        ]
    },
    "porte-6couteaux-new": {
        name: "Porte couteau de collection 6 couteaux",
        price: "70€",
        description: "Mettez en Scène Votre Collection\nNe cachez plus vos couteaux. Ce Porte-Couteaux d'Exposition Vertical est conçu pour les lames qui méritent d'être vues.\nC'est la solution idéale pour transformer votre collection en véritable pièce maîtresse de votre cuisine ou atelier.",
        characteristics: [
            "• Bois de noisetier et Spruce",
            "• Dimensions : Largeur 445 mm Profondeur 80 mm Hauteur 420 mm",
            "• Poids : env. 1200 g"
        ],
        images: [
            "assets/Accessoires/Photos-porte-couteaux/23-Porte_6couteaux_masque.jpg"
        ]
    }
};

// État de l'application
let currentImageIndex = {};
let currentModal = null;

// Gestion des filtres de produits
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Gestionnaire d'événements pour les filtres
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Mettre à jour l'état actif des boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrer les produits
            if (filter === 'all') {
                productCards.forEach(card => card.style.display = 'block');
            } else {
                productCards.forEach(card => {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });

    // Gestionnaire pour les boutons "Voir détails"
    const detailButtons = document.querySelectorAll('.view-details');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            showProductModal(productId);
        });
    });
});

// Fonction pour afficher le modal produit
function showProductModal(productId) {
    const product = productData[productId];
    if (!product) return;

    // Créer le modal s'il n'existe pas
    if (!document.getElementById('product-modal')) {
        createProductModal();
    }

    const modal = document.getElementById('product-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Remplir le contenu du modal
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${product.name}</h2>
            <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
            <div class="product-carousel">
                <div class="carousel-container">
                    <img src="${product.images[0]}" alt="${product.name}" class="carousel-image" id="carousel-image">
                    ${product.images.length > 1 ? `
                        <button class="carousel-nav carousel-prev" id="carousel-prev">&#8249;</button>
                        <button class="carousel-nav carousel-next" id="carousel-next">&#8250;</button>
                    ` : ''}
                </div>
                <div class="carousel-indicators">
                    ${product.images.map((_, index) => `<span class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`).join('')}
                </div>
            </div>
            <div class="product-info">
                <div class="product-price">${product.price}</div>
                <div class="product-description">
                    <h3>Description</h3>
                    <p>${product.description}</p>
                </div>
                <div class="product-characteristics">
                    <h3>Caractéristiques</h3>
                    <ul>
                        ${product.characteristics.map(char => `<li>${char}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Afficher le modal
    modal.style.display = 'block';
    document.body.classList.add('overflow-hidden');
    
    // Configurer les gestionnaires d'événements du modal
    setupModalEvents(product);
    
    currentModal = productId;
    currentImageIndex[productId] = 0;
}

// Fonction pour créer le modal produit
function createProductModal() {
    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <!-- Le contenu sera rempli dynamiquement -->
        </div>
    `;
    document.body.appendChild(modal);
}

// Fonction pour configurer les événements du modal
function setupModalEvents(product) {
    const modal = document.getElementById('product-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    const prevBtn = modal.querySelector('#carousel-prev');
    const nextBtn = modal.querySelector('#carousel-next');
    const indicators = modal.querySelectorAll('.indicator');

    // Fermer le modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.classList.remove('overflow-hidden');
        currentModal = null;
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Navigation du carrousel
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            navigateCarousel(product, 'prev');
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            navigateCarousel(product, 'next');
        });
    }

    // Indicateurs du carrousel
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showCarouselImage(product, index);
        });
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Fonction pour naviguer dans le carrousel
function navigateCarousel(product, direction) {
    if (!currentModal || !currentImageIndex[currentModal]) return;
    
    const currentIndex = currentImageIndex[currentModal];
    let newIndex;
    
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % product.images.length;
    } else {
        newIndex = currentIndex > 0 ? currentIndex - 1 : product.images.length - 1;
    }
    
    showCarouselImage(product, newIndex);
}

// Fonction pour afficher une image spécifique du carrousel
function showCarouselImage(product, index) {
    if (!currentModal) return;
    
    const image = document.getElementById('carousel-image');
    const indicators = document.querySelectorAll('.indicator');
    
    if (image) {
        image.src = product.images[index];
    }
    
    // Mettre à jour les indicateurs
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    currentImageIndex[currentModal] = index;
}

// Gestion du scroll smooth pour la navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
