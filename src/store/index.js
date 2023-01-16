import Vue from "vue";
import Vuex from "vuex";

import adiyl from "../assets/image/adiyl.jpeg";
import bayer from "../assets/image/bayer.jpeg";
import capsonic from "../assets/image/check.jpeg";
import chlorafenac from "../assets/image/chronfecle.jpeg";
import septisini from "../assets/image/drug2.jpeg";
import parasconic from "../assets/image/drug3.jpeg";
import sepdomatic from "../assets/image/drug4.jpeg";
import paracetamols from "../assets/image/drug5.jpeg";
import sepronic from "../assets/image/equator.jpeg";
import gavinsco from "../assets/image/gavinsco.jpeg";
import hab from "../assets/image/hab.jpeg";
import paracetamol from "../assets/image/paracetamol.jpeg";
import pil from "../assets/image/pil.jpeg";
import prilose from "../assets/image/prilose.jpeg";
import rite from "../assets/image/rayAid.jpeg";
import sinaspril from "../assets/image/sinaspril.jpeg";



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shops: [
      {
        id: 1,
        url: adiyl,
        name: "Addil",
        price: 25,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 2,
        url: bayer,
        name: "Bayer",
        price: 32,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 3,
        url: capsonic,
        name: "Capsonic",
        price: 45,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 4,
        url: chlorafenac,
        name: "Chlorphenamine",
        price: 32,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 5,
        url: septisini,
        name: "Septisini",
        price: 18,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 6,
        url: parasconic,
        name: "Parasconic",
        price: 24,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 7,
        url: sepdomatic,
        name: "Sepdomatic",
        price: 26,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 8,
        url: paracetamols,
        name: "Paracetamol",
        price: 20,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 9,
        url: sepronic,
        name: "Sepronic",
        price: 35,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 10,
        url: gavinsco,
        name: "Gavinsco",
        price: 23,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 11,
        url: hab,
        name: "Terifac Herb",
        price: 19,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 12,
        url: paracetamol,
        name: "Paracetamol",
        price: 28,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 13,
        url: pil,
        name: "Hanson Pill",
        price: 30,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 14,
        url: prilose,
        name: "Prillose Pill",
        price: 16,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 15,
        url: rite,
        name: "Rite",
        price: 19,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
      {
        id: 16,
        url: sinaspril,
        name: "Pertfic Pill",
        price: 24,
        description: "lorem movism isub th ozhc  kh h kush muis losil",
        rate: 3.2,
      },
    ],
    cartCount: 0,
    cartItem: [],
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItem.length > 0) {
        let check = state.cartItem.some((i) => i.id === item.id);

        if (check) {
          let itemIndex = state.cartItem.findIndex(
            (element) => element.id === item.id
          );
          state.cartItem[itemIndex]["quantity"] += 1;
        } else {
          state.cartItem.push(item);
        }
      } else {
        state.cartItem.push(item);
      }
      state.cartCount++;
    },
    removeItem(state, payload) {
      if (state.cartItem.length > 0) {
        let bool = state.cartItem.some((i) => i.id === payload.id);
        if (bool) {
          let itemIndex = state.cartItem.findIndex(
            (element) => element.id === payload.id
          );
          if (state.cartItem[itemIndex]["quantity"] !== 0) {
            state.cartItem[itemIndex]["quantity"] -= 1;
            state.cartCount--;
          }
          if (state.cartItem[itemIndex]["quantity"] === 0) {
            state.cartItem.splice(itemIndex, 1);
          }
        }
      }
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
  },
  modules: {},
});
