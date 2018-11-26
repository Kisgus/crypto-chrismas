module.exports = {
  migrations_directory: "./migrations",
  networks: {
      development: {
	  host: "localhost",
	  port: 9545,
	  network_id: "*" // Match any network id
      },
      virtual: {
	  host: "localhost",
	  port: 8546,
	  network_id: "*" // Match any network id
      }
  }
};
