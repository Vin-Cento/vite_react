import { composeBundles } from "redux-bundler";
import { usersBundle } from "./bundles/user";

export default composeBundles(usersBundle);
