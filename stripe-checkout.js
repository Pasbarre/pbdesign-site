// --- PARTIE 1 : INITIALISATION DE STRIPE ---
// Remplacez 'VOTRE_CLE_PUBLIQUE_STRIPE' par votre vraie clé publique Stripe.
// Elle commence par 'pk_test_...' pour les tests.
const stripe = Stripe('VOTRE_CLE_PUBLIQUE_STRIPE');

// --- PARTIE 2 : GESTION DU PANIER (Pop-up et Bouton) ---
const cartButton = document.querySelector('button[onclick="openCartDirectly();"]');
const cartModal = document.getElementById('cart-modal'); // Assurez-vous que cet ID existe dans votre HTML
const closeCartButton = document.getElementById('close-cart'); // Assurez-vous que cet ID existe dans votre HTML
const cartContent = document.getElementById('cart-content');
const cartCountSpan = document.getElementById('cart-count');
const cartTotalPriceSpan = document.getElementById('cart-total-price');
const cartTotalContainer = document.getElementById('cart-total-container');

let cart = []; // Le tableau qui contiendra les produits du panier

// Fonction pour ouvrir/fermer le panier
function toggleCart() {
    if (cartModal) {
        cartModal.classList.toggle('hidden'); // 'hidden' est une classe Tailwind CSS
        // Animation d'entrée/sortie si le modal n'est plus "hidden"
        if (!cartModal.classList.contains('hidden')) {
            cartModal.style.opacity = '1';
            cartModal.style.pointerEvents = 'auto';
        } else {
            cartModal.style.opacity = '0';
            cartModal.style.pointerEvents = 'none';
        }
    }
}

// Lie le bouton du panier à la fonction toggleCart
if (cartButton) {
    cartButton.addEventListener('click', toggleCart);
}

// Lie le bouton de fermeture du panier à la fonction toggleCart
if (closeCartButton) {
    closeCartButton.addEventListener('click', toggleCart);
}

// Fermer le panier si l'utilisateur clique en dehors de la fenêtre modale
if (cartModal) {
    cartModal.addEventListener('click', (event) => {
        // Vérifie si l'on a cliqué sur le fond noir (le modal lui-même)
        if (event.target === cartModal) {
            toggleCart();
        }
    });
}

// Fermer le panier avec la touche 'Escape'
document.addEventListener('keydown', (e) => {
    if (cartModal && !cartModal.classList.contains('hidden') && e.key === 'Escape') {
        toggleCart();
    }
});

// --- PARTIE 3 : FONCTIONNALITÉS DU PANIER (Ajout/Affichage) ---

// Exemple de produits (vous les remplacerez par vos vrais produits)
const products = [
    { id: 'prod_ABC123', name: 'Lampe de Chevet Artisanale', price: 4999, description: 'Une belle lampe unique.', image: 'assets/images/lampe.jpg' },
    { id: 'prod_DEF456', name: 'Table Basse Design', price: 12999, description: 'Une table basse moderne.', image: 'assets/images/table.jpg' }
];

function updateCartDisplay() {
    cartContent.innerHTML = ''; // Vide le contenu actuel du panier
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContent.innerHTML = '<p class="text-center text-gray-500">Votre panier est vide.</p>';
        cartCountSpan.classList.add('hidden');
        cartTotalContainer.classList.add('hidden');
    } else {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const itemTotal = product.price * item.quantity;
                totalPrice += itemTotal;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('flex', 'justify-between', 'items-center', 'py-2', 'border-b', 'border-gray-200');
                cartItemDiv.innerHTML = `
                    <span>${product.name} (x${item.quantity})</span>
                    <span>${(itemTotal / 100).toFixed(2)}€</span>
                    <button data-product-id="${product.id}" class="remove-from-cart text-red-500 hover:text-red-700 ml-4">
                        &times;
                    </button>
                `;
                cartContent.appendChild(cartItemDiv);
            }
        });
        cartCountSpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountSpan.classList.remove('hidden');
        cartTotalPriceSpan.textContent = `${(totalPrice / 100).toFixed(2)}€`;
        cartTotalContainer.classList.remove('hidden');
    }

    // Ajouter les écouteurs pour les boutons de suppression
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            removeFromCart(productId);
        });
    });
}

function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity--;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Supprime l'article si la quantité est à 0
        }
    }
    updateCartDisplay();
}

// --- PARTIE 4 : INTÉGRATION STRIPE CHECKOUT ---

// Écoute les clics sur un bouton "Payer" (nous l'ajouterons plus tard dans le HTML du panier)
const checkoutButton = document.createElement('button');
checkoutButton.textContent = 'Payer avec Stripe';
checkoutButton.classList.add('mt-4', 'w-full', 'px-6', 'py-3', 'rounded-lg', 'text-white', 'font-bold', 'transition-transform', 'transform-gpu', 'hover:scale-105');
checkoutButton.style.backgroundColor = 'var(--color-primary)'; // Utilise votre couleur primaire
checkoutButton.addEventListener('click', async () => {
    if (cart.length === 0) {
        alert('Votre panier est vide !');
        return;
    }

    // Crée une liste d'articles formatée pour Stripe
    const lineItems = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return {
            price_data: {
                currency: 'eur',
                product_data: {
                    name: product.name,
                    images: product.image ? [product.image] : [], // Optionnel
                },
                unit_amount: product.price, // Prix en centimes
            },
            quantity: item.quantity,
        };
    });

    // Redirige vers Stripe Checkout
    try {
        const response = await fetch('/.netlify/functions/create-checkout-session', { // Cette URL devra être adaptée ou un simple POST si pas de Netlify
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lineItems }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erreur lors de la création de la session Checkout.');
        }

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors du paiement. Veuillez réessayer.');
    }
});
// Ajoutez le bouton Payer au container du total dans le panier
if (cartTotalContainer) {
    cartTotalContainer.appendChild(checkoutButton);
}

// --- Initialisation au chargement de la page ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay(); // Affiche le panier vide au départ
    // Vous pouvez ajouter des boutons "Ajouter au panier" à vos produits ici
    // Pour l'exemple, ajoutons un bouton qui ajoute un produit par défaut
    // Ceci est juste pour tester, vous l'intégrerez dans votre boutique
    const testAddButton = document.createElement('button');
    testAddButton.textContent = 'Ajouter une Lampe au panier (TEST)';
    testAddButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'm-4');
    testAddButton.addEventListener('click', () => addToCart('prod_ABC123'));
    // document.body.appendChild(testAddButton); // Ajoutez ce bouton où vous voulez pour tester

    const testAddButton2 = document.createElement('button');
    testAddButton2.textContent = 'Ajouter une Table au panier (TEST)';
    testAddButton2.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'm-4');
    testAddButton2.addEventListener('click', () => addToCart('prod_DEF456'));
    // document.body.appendChild(testAddButton2); // Ajoutez ce bouton où vous voulez pour tester

    // Exemple: si vous avez des boutons "Ajouter au panier" dans votre HTML,
    // vous pouvez les cibler ici:
    // document.querySelectorAll('.add-to-cart-button').forEach(button => {
    //     button.addEventListener('click', (event) => {
    //         const productId = event.target.dataset.productId;
    //         addToCart(productId);
    //     });
    // });
});