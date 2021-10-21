import { VERSION } from "./version";
import { auth } from "./auth";
import { hook } from "./hook";
import { StrategyOptions, AuthOptions, Authentication } from "./types";

export type Types = {
  StrategyOptions: any;
  AuthOptions: any;
  Authentication: any;
};

export const createTestAuth: StrategyInterface = function createTestAuth(
  options: StrategyOption
) {
  return Object.assign(auth.bind(null, options), {
    hook: hook.bind(null, options),
  });
};
