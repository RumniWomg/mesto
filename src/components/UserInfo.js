export class UserInfo {
  constructor({userNameInfo, aboutMeInfo}) {
    this._userNameInfo = document.querySelector(userNameInfo);
    this._aboutMeInfo = document.querySelector(aboutMeInfo);
  }

  getUserInfo() {
    const profileFormInfo = {
      userNameInfo: this._userNameInfo.textContent,
      aboutMeInfo: this._aboutMeInfo.textContent
    }

    return profileFormInfo;
  }

  setUserInfo(userInfo) {
    this._userNameInfo.textContent = userInfo.username;
    this._aboutMeInfo.textContent = userInfo.aboutme;
  }
}