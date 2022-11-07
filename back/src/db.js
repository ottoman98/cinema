import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://caug:proyecto@app1.n3aojty.mongodb.net/proyecto4?retryWrites=true&w=majority"
    );
    console.log("Db connect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
