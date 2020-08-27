import { instance } from "./api";

type SecurityCaptchaResponseType = {
  url: string
}

export const securityAPI = {
  getSecurityCaptcha: () => {
    return instance
      .get<SecurityCaptchaResponseType>(
        `security/get-captcha-url`
      )
  },
};
