import database from "../src/models";
import bcrypt from "bcryptjs";
import Email from "../services/EmailsService";
const WEBUIEMAIL = "webuihotelsearch@gmail.com";
const VERIFICATIONEMAIL = "Verification email";
const VERIFY = require("../constants/server.env.json").VERIFY;
const USERS = require("../constants/server.env.json").USERS;
const RECOVER = require("../constants/server.env.json").RECOVER;
const PASSWORDRECOVERY = "Password recovery";
const CLIENT_DOMAIN_DEFAULT = require("../constants/server.env.json")
  .CLIENT_DOMAIN_DEFAULT;
const randomstring = require("randomstring");

class UserService {
  static async getAllUsers() {
    try {
      return await database.users.findAll();
    } catch (e) {
      console.error(e);
    }
  }

  static async getUserById(id) {
    try {
      return await database.users.findByPk(id);
    } catch (e) {
      console.error(e);
    }
  }

  static async getUserByEmail(email) {
    try {
      return await database.users.findOne({ where: { email } });
    } catch (e) {
      console.error(e);
    }
  }

  static async getUserByAuthToken(authToken) {
    try {
      return await database.users.findOne({ where: { authToken } });
    } catch (e) {
      console.error(e);
    }
  }

  static async updateUserFullname(userData) {
    try {
      await database.users.update(
        { fullname: userData.fullname },
        { where: { email: userData.email } }
      );
      return userData;
    } catch (e) {
      console.error(e);
    }
  }

  static async updateUserActivated(userData) {
    try {
      await database.users.update(
        { activated: userData.activated },
        { where: { email: userData.email } }
      );
      return userData;
    } catch (e) {
      console.error(e);
    }
  }

  static async updateUserPassword(userData, password) {
    try {
      userData.password = password;
      const user = await this.beforeCreate(userData);
      await database.users.update(
        { password: user.password },
        { where: { email: user.email } }
      );
      return user;
    } catch (e) {
      console.error(e);
    }
  }

  static async updateUserAuthToken(authToken, email) {
    try {
      await database.users.update({ authToken }, { where: { email } });
      const userData = await UserService.getUserByEmail(email);
      return userData;
    } catch (e) {
      console.error(e);
    }
  }

  static async beforeCreate(user) {
    try {
      var salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);
      user.password = hash;
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async createUserRecord(newUser) {
    try {
      this.beforeCreate(newUser);
      await database.users.create(newUser);
      return newUser;
    } catch (e) {
      console.error(e);
    }
  }

  static async checkPassword(userpass, pass) {
    try {
      const compare = await bcrypt.compare(userpass, pass);
      return compare;
    } catch (error) {
      console.error(e);
    }
  }

  static async sendRegisterEmailViaEmailBuilder(authToken, email) {
    try {
      var link = CLIENT_DOMAIN_DEFAULT + USERS + VERIFY + "/" + authToken;
      const html =
        "Hello,<br> Please Click on the link to verify.<br><a href=" +
        link +
        ">Click here to verify</a>";
      new Email.Builder(WEBUIEMAIL)
        .setReceiver(email)
        .setHTML(html)
        .setSubject(VERIFICATIONEMAIL)
        .build();
    } catch (e) {
      console.error(e);
    }
  }

  static async sendRecoveryEmailViaEmailBuilder(email) {
    try {
      const recoverEmailHash = randomstring.generate();
      const recoverEmailLink =
        CLIENT_DOMAIN_DEFAULT +
        USERS +
        RECOVER +
        "/" +
        email +
        "/" +
        recoverEmailHash;
      const html =
        "Hello,<br> Please Click on the link to reset your password.<br><a href=" +
        recoverEmailLink +
        ">Click here to redirect</a>";
      new Email.Builder(WEBUIEMAIL)
        .setReceiver(email)
        .setHTML(html)
        .setSubject(PASSWORDRECOVERY)
        .build();
    } catch (e) {
      console.error(e);
    }
  }

  static async getUserOrdersByStatus(id, status) {
    try {
      const response = await database.orders.findAll({
        where: { userId: id, status },
        attributes: ["startDate", "finishDate", "id"],
        include: [
          {
            model: database.rooms,
            attributes: ["price"],
            include: [
              {
                model: database.room_type,
                attributes: ["name"]
              },
              {
                model: database.hotels,
                attributes: ["name", "starRating"],
                include: [
                  {
                    model: database.addresses,
                    attributes: ["city", "street", "house"]
                  },
                  {
                    model: database.photo,
                    attributes: ["photo_url"]
                  }
                ]
              }
            ]
          }
        ]
      });
      return response;
    } catch (e) {
      console.error(e);
    }
  }

}

export default UserService;
