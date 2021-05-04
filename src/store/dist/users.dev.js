"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("@/utils/api"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var state = {
  userPersonalDetails: {},
  userInvestmentDetails: {},
  userNextOfKinDetails: {},
  userReferralDetails: {},
  bankList: [],
  userBanks: [],
  userWallet: {},
  userNotifications: []
};
var getters = {
  getPersonalDetails: function getPersonalDetails(state) {
    return state.userPersonalDetails;
  },
  getInvestmentDetails: function getInvestmentDetails(state) {
    return state.userInvestmentDetails;
  },
  getNextOfKinDetails: function getNextOfKinDetails(state) {
    return state.userNextofKinDetails;
  },
  getReferralDetails: function getReferralDetails(state) {
    return state.userReferralDetails;
  },
  getBankList: function getBankList(state) {
    return state.bankList;
  },
  getUserBanks: function getUserBanks(state) {
    return state.userBanks;
  },
  getUserNotifications: function getUserNotifications(state) {
    return state.userNotifications;
  },
  getUserWallet: function getUserWallet(state) {
    return state.userWallet;
  }
};
var mutations = {
  setPersonalDetails: function setPersonalDetails(state, data) {
    return (state.userPersonalDetails = data);
  },
  setNextOfKinDetails: function setNextOfKinDetails(state, data) {
    return (state.userNextofKinDetails = data);
  },
  setInvestmentDetails: function setInvestmentDetails(state, data) {
    return (state.userInvestmentDetails = data);
  },
  setReferralDetails: function setReferralDetails(state, data) {
    return (state.userReferralDetails = data);
  },
  setUserBanks: function setUserBanks(state, data) {
    return (state.userBanks = data);
  },
  setBankList: function setBankList(state, data) {
    return (state.bankList = data);
  },
  setUserNotifications: function setUserNotifications(state, data) {
    return (state.userNotifications = data);
  },
  setUserWallet: function setUserWallet(state, data) {
    return (state.userWallet = data);
  }
};
var actions = {
  createPersonalDetails: function createPersonalDetails(_ref, payload) {
    var commit, res;
    return regeneratorRuntime.async(function createPersonalDetails$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("profile/personalDetails", payload, true));

          case 3:
            res = _context.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context.next = 9;
              break;
            }

            commit("setPersonalDetails", res.data.personalDetails);
            return _context.abrupt("return", res);

          case 9:
            return _context.abrupt("return", res);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  createInvestmentPlan: function createInvestmentPlan(_ref2, payload) {
    var commit, res;
    return regeneratorRuntime.async(function createInvestmentPlan$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("profile/investPlan", payload, true));

          case 3:
            res = _context2.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context2.next = 9;
              break;
            }

            commit("setInvestmentDetails", res.data.investmentPlan);
            return _context2.abrupt("return", res);

          case 9:
            return _context2.abrupt("return", res);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  createNextOfKin: function createNextOfKin(_ref3, payload) {
    var commit, res;
    return regeneratorRuntime.async(function createNextOfKin$(_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            commit = _ref3.commit;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("profile/nextOfKin", payload, true));

          case 3:
            res = _context3.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context3.next = 9;
              break;
            }

            commit("setNextOfKinDetails", res.data.investmentPlan);
            return _context3.abrupt("return", res);

          case 9:
            return _context3.abrupt("return", res);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  getUserProfileDetails: function getUserProfileDetails(_ref4) {
    var commit, getters, res, user, profileDetails;
    return regeneratorRuntime.async(function getUserProfileDetails$(_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            (commit = _ref4.commit), (getters = _ref4.getters);
            _context4.next = 3;
            return regeneratorRuntime.awrap(_api["default"].get("profile/getSingle", true));

          case 3:
            res = _context4.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context4.next = 14;
              break;
            }

            // commit("setProfile", res.data.profileDetails);
            user = getters.getUser;
            profileDetails = res.data.profileDetails || {};
            profileDetails.email = user.email;
            profileDetails.firstName = user.firstName;
            profileDetails.lastName = user.lastName; // console.log(`profile Details = ${JSON.stringify(profileDetails)}`);

            commit("setProfile", profileDetails);
            return _context4.abrupt("return", res);

          case 14:
            return _context4.abrupt("return", res);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  fetchBankList: function fetchBankList(_ref5) {
    var commit, res, banks, bankList;
    return regeneratorRuntime.async(function fetchBankList$(_context5) {
      while (1) {
        switch ((_context5.prev = _context5.next)) {
          case 0:
            commit = _ref5.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_api["default"].get("banks/all", true));

          case 3:
            res = _context5.sent;

            if (res.status === 200 || res.status === 201) {
              banks = res.data.banks;
              bankList = banks.map(function(bank) {
                return {
                  key: bank.name,
                  value: bank.code,
                  slug: bank.slug,
                  longCode: bank.longcode
                };
              });
              commit("setBankList", bankList);
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  fetchUserBanks: function fetchUserBanks(_ref6) {
    var commit, res;
    return regeneratorRuntime.async(function fetchUserBanks$(_context6) {
      while (1) {
        switch ((_context6.prev = _context6.next)) {
          case 0:
            commit = _ref6.commit;
            _context6.next = 3;
            return regeneratorRuntime.awrap(_api["default"].get("banks/userBank", true));

          case 3:
            res = _context6.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context6.next = 9;
              break;
            }

            commit("setUserBanks", res.data.details);
            return _context6.abrupt("return", res);

          case 9:
            return _context6.abrupt("return", res);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  // eslint-disable-next-line no-unused-vars
  verifyBankAccount: function verifyBankAccount(_ref7, _ref8) {
    var commit, account_number, code, res;
    return regeneratorRuntime.async(function verifyBankAccount$(_context7) {
      while (1) {
        switch ((_context7.prev = _context7.next)) {
          case 0:
            commit = _ref7.commit;
            (account_number = _ref8.account_number), (code = _ref8.code);
            _context7.next = 4;
            return regeneratorRuntime.awrap(_api["default"].get("banks/verify?account_number=".concat(account_number, "&code=").concat(code), true));

          case 4:
            res = _context7.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", res);

          case 9:
            return _context7.abrupt("return", res);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  // eslint-disable-next-line no-unused-vars
  addBankAccount: function addBankAccount(_ref9, payload) {
    var commit, res;
    return regeneratorRuntime.async(function addBankAccount$(_context8) {
      while (1) {
        switch ((_context8.prev = _context8.next)) {
          case 0:
            commit = _ref9.commit;
            _context8.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("banks", payload, true));

          case 3:
            res = _context8.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context8.next = 9;
              break;
            }

            commit("updateUserBanks", res.data.details);
            return _context8.abrupt("return", res);

          case 9:
            return _context8.abrupt("return", res);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  fetchReferralDetails: function fetchReferralDetails(_ref10) {
    var commit, res, referredUsers, refData;
    return regeneratorRuntime.async(function fetchReferralDetails$(_context9) {
      while (1) {
        switch ((_context9.prev = _context9.next)) {
          case 0:
            commit = _ref10.commit;
            _context9.next = 3;
            return regeneratorRuntime.awrap(_api["default"].get("referrals/get", true));

          case 3:
            res = _context9.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context9.next = 11;
              break;
            }

            referredUsers = res.data.referredUsers;
            refData = _objectSpread({}, res.data.referralDetails, {
              referredUsers: referredUsers
            });
            commit("setReferralDetails", refData); // commit("setReferralDetails", res.data.referralDetails);
            // commit("setReferredUsers", res.data.referredUsers);

            return _context9.abrupt("return", res);

          case 11:
            return _context9.abrupt("return", res);

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    });
  },
  // eslint-disable-next-line no-unused-vars
  uploadUserAvatar: function uploadUserAvatar(_ref11, payload) {
    var commit, dispatch, res;
    return regeneratorRuntime.async(function uploadUserAvatar$(_context10) {
      while (1) {
        switch ((_context10.prev = _context10.next)) {
          case 0:
            (commit = _ref11.commit), (dispatch = _ref11.dispatch);
            _context10.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("settings/image", payload, true));

          case 3:
            res = _context10.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context10.next = 9;
              break;
            }

            dispatch("getUserProfileDetails");
            return _context10.abrupt("return", res);

          case 9:
            return _context10.abrupt("return", res);

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    });
  },
  // eslint-disable-next-line no-unused-vars
  changeUserPassword: function changeUserPassword(_ref12, payload) {
    var commit, res;
    return regeneratorRuntime.async(function changeUserPassword$(_context11) {
      while (1) {
        switch ((_context11.prev = _context11.next)) {
          case 0:
            commit = _ref12.commit;
            _context11.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("settings/change-password", payload, true));

          case 3:
            res = _context11.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context11.next = 8;
              break;
            }

            return _context11.abrupt("return", res);

          case 8:
            return _context11.abrupt("return", res);

          case 9:
          case "end":
            return _context11.stop();
        }
      }
    });
  },
  // eslint-disable-next-line no-unused-vars
  getAllUserNotifications: function getAllUserNotifications(_ref13, payload) {
    var commit, res, notificationsData, userNotification;
    return regeneratorRuntime.async(function getAllUserNotifications$(_context12) {
      while (1) {
        switch ((_context12.prev = _context12.next)) {
          case 0:
            commit = _ref13.commit;
            _context12.next = 3;
            return regeneratorRuntime.awrap(_api["default"].get("notifications/get?page=".concat(payload.page ? payload.page : 10), true));

          case 3:
            res = _context12.sent;

            if (!(res.status === 200 || res.status === 201)) {
              _context12.next = 11;
              break;
            }

            notificationsData = res.data.notifications;
            userNotification = _objectSpread(
              {
                notificationsData: notificationsData
              },
              res.data.pagination
            );
            commit("setUserNotifications", userNotification);
            return _context12.abrupt("return", res);

          case 11:
            return _context12.abrupt("return", res);

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    });
  },
  deleteUserNotification: function deleteUserNotification(_ref14, payload) {
    var dispatch, res;
    return regeneratorRuntime.async(function deleteUserNotification$(_context13) {
      while (1) {
        switch ((_context13.prev = _context13.next)) {
          case 0:
            dispatch = _ref14.dispatch;
            _context13.next = 3;
            return regeneratorRuntime.awrap(_api["default"].post("notifications/".concat(payload.id, "/delete"), {}, true));

          case 3:
            res = _context13.sent;
            dispatch("getAllUserNotifications", {
              page: 10
            });
            return _context13.abrupt("return", res.status === 200 || res.status === 201);

          case 6:
          case "end":
            return _context13.stop();
        }
      }
    });
  },
  getWalletBalance: function getWalletBalance(_ref15) {
    var commit, res;
    return regeneratorRuntime.async(function getWalletBalance$(_context14) {
      while (1) {
        switch ((_context14.prev = _context14.next)) {
          case 0:
            commit = _ref15.commit;
            _context14.next = 3;
            return regeneratorRuntime.awrap(_api["default"].get("wallet/balance", true));

          case 3:
            res = _context14.sent;
            commit("setUserWallet", res.data);

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;
