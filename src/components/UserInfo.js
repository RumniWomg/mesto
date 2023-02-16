export class UserInfo {
  constructor({userNameInfo, aboutMeInfo, userAvatar}) {
    this._userNameInfo = document.querySelector(userNameInfo);
    this._aboutMeInfo = document.querySelector(aboutMeInfo);
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    const profileFormInfo = {
      userNameInfo: this._userNameInfo.textContent,
      aboutMeInfo: this._aboutMeInfo.textContent,
      userAvatar: this._userAvatar.src
    }

    return profileFormInfo;
  }

  setUserInfo(userInfo) {
    this._userNameInfo.textContent = userInfo.name;
    this._aboutMeInfo.textContent = userInfo.about;
    this.setUserAvatar(userInfo);
  }

  setUserAvatar(object) {
    this._userAvatar.src = object.avatar;
  }
}