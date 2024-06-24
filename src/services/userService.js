const db = require("../models/index");
const { User } = db;

const updateBalance = async (userId, amount) => {
  return db.sequelize.transaction(async (t) => {
    const user = await User.findOne({
      where: { id: userId },
      transaction: t,
    });

    if (!user) {
      throw new Error("User not found");
    }

    const newBalance = user.balance + amount;
    if (newBalance < 0) {
      throw new Error("Insufficient balance");
    }

    const [updatedRows] = await User.update(
      { balance: newBalance, version: user.version + 1 },
      {
        where: {
          id: userId,
          version: user.version,
        },
        transaction: t,
      }
    );

    if (updatedRows === 0) {
      throw new Error("Balance update conflict");
    }

    return await User.findOne({
      where: { id: userId },
      attributes: { exclude: ["version"] },
      transaction: t,
    });
  });
};

const getBalance = async (userId) => {
  const user = await User.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user.balance;
};

module.exports = {
  updateBalance,
  getBalance,
};
