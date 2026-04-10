/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    answers?: Record<string, number>,
    shuffledQuestions?: Array<{ id: string; dim?: string; special?: boolean; kind?: string }>,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}