import { Product } from "../types"



export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item.id === product.id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].stock += 1
    }
    else {
        cart.push({
            ...product, stock: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item.id === productId)

    if(productIndex > -1) {
        cart[productIndex].stock = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = (): Product[] => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  };