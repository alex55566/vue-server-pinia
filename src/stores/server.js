import { defineStore } from 'pinia';
import axios from 'axios'
import {nanoid} from 'nanoid'
import { getCurrentDate } from '../helpers/helpers';

export const useServerStore = defineStore('server', {
  state: () => {
    return { 
      showLoader: false,
      showError: false,
      user: null,
      emptyUser: false,
      orders: null,
      order: 'asc',
    }
  },
  getters: {
    orderQuantity: (state) => state.orders.length,
  },
  actions: {
    getError() {
      this.showError = true;
      setTimeout(() => {
        this.showError = false
      },2000)
    },
    getUsers(name, password) {
      this.showLoader = true
        axios
        .get(
          `http://localhost:3001/users?name=${name}&password=${password}`
        )
        .then((response) => {
          response.data.length ? this.user = response.data : this.emptyUser = true
          sessionStorage.setItem('user', JSON.stringify(response.data))
        })
        .catch(() => this.getError())
        .finally(() => {
          this.showLoader = false;
        });
    },
    exitUser() {
      this.user = null
      sessionStorage.setItem('user', null)
    },
    resetEmptyUser() {
      this.emptyUser = false
    },
    getOrders() {
      this.showLoader = true
      axios
      .get(
        `http://localhost:3001/events`
      )
      .then((response) => response.data.length ? this.orders = response.data : undefined)
      .catch(() => this.getError())
      .finally(() => {
        this.showLoader = false;
      });
    },
    getUser() {
      this.user = JSON.parse(sessionStorage.getItem('user'))
    },
    addOrder(name,address, comments) {
      this.showLoader = true
        axios
        .post(
          `http://localhost:3001/events`,
          {
            id: nanoid(),
            name: name,
            address: address,
            date: getCurrentDate(),
            status: "Новый",
            comment: comments
          }
        )
        .catch(() => this.getError())
        .finally(() => {
          this.showLoader = false;
        });

    },
    sortData(payload) {
      this.showLoader = true
      axios
      .get(
        `http://localhost:3001/events?_sort=${payload === 'address' ? 'address' : 'date'}&_order=${this.order}`
      )
      .then((response) => response.data.length ? this.orders = response.data : undefined)
      .catch(() => this.getError())
      .finally(() => {
        this.showLoader = false
        this.order = this.order === 'asc' ? 'desc' : 'asc'
      });
    },
    updateOrder(id) {
      this.showLoader = true
        axios
        .patch(
          `http://localhost:3001/events/${id}`, {
            status: "Выполнен"
          }
        )
        .then((response) => {
          this.orders.forEach((el) => {
            if (el.id === response.data.id) {
              el.status = response.data.status
            }
          })
        })
        .catch(() => this.getError())
        .finally(() => {
          this.showLoader = false;
        });
    },
    deleteOrder(id) {
      this.showLoader = true
      axios
      .delete(
        `http://localhost:3001/events/${id}`,
      )
      .then((response) => {
        this.orders = this.orders.filter(el => el.id !== id)
      })
      .catch(() => this.getError())
      .finally(() => {
        this.showLoader = false;
      });
    }
  },
})