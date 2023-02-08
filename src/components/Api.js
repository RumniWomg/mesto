
// Токен: e15929fa-973c-4224-8a02-043832be46fc
// Идентификатор группы: cohort-59"



class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers.authorization;
  }

  getInitialCards = () => {
    return fetch(this._baseUrl + '/cards', {
      headers: {
        authorization: this._headers,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  getUsersData = () => {
    return fetch(this._baseUrl + '/users/me', {
      headers: {
        authorization: this._headers,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  setUsersData = (data) => {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.username,
        about: data.aboutme
      }),
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  deleteCards = (_id) => {
    return fetch(this._baseUrl + '/cards/' + _id, {
      method: 'DELETE',
      headers: {
        authorization: this._headers,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  setAvatar = (data) => {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data.avatar
      }),
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  deleteLikeCards = (_id) => {
    return fetch(this._baseUrl + '/cards/' + _id + '/likes', {
      method: 'DELETE',
      headers: {
        authorization: this._headers,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  putLikeCards = (_id) => {
    return fetch(this._baseUrl + '/cards/' + _id + '/likes', {
      method: 'PUT',
      headers: {
        authorization: this._headers,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  createCard = (data) => {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'e15929fa-973c-4224-8a02-043832be46fc',
    'Content-Type': 'application/json'
  }
});