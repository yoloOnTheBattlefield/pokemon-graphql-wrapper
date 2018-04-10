import axios from "axios";
import util from "util";
import path from "path";
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";

// export default mergeTypes(fileLoader(path.join(__dirname, "./")));
export default mergeResolvers(fileLoader(path.join(__dirname, "./**")));
