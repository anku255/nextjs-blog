import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  Query: {},
  Mutation: {
    signup: async (_, args, context) => {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.models.User({ ...args, password });
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      return {
        token,
        user
      };
    },

    login: async (_, args, context) => {
      const user = await context.models.User.findOne({ email: args.email });
      if (!user) {
        throw new Error("No such user found");
      }

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

      return {
        token,
        user
      };
    }
  }
};
