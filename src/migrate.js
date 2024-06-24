const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
const config = require("./config/config");

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const umzug = new Umzug({
  migrations: { glob: "src/migrations/*.js" },
  storage: new SequelizeStorage({ sequelize }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

const runMigrations = async () => {
  try {
    await umzug.up();
    console.log("Migrations up to date");
  } catch (error) {
    console.error("Migration failed", error);
    process.exit(1);
  }
};

const revertMigrations = async () => {
  try {
    await umzug.down();
    console.log("Last migration reverted");
  } catch (error) {
    console.error("Reverting migration failed", error);
    process.exit(1);
  }
};

if (process.argv.includes("revert")) {
  revertMigrations();
} else {
  runMigrations();
}
