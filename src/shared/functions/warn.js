/**
 * The reason we are wrapping the standard console.log function here, is so that we have just one place where to disable
 * the ESLint rule.
 * @param message
 */
export default (message) => {
  /**
   * Eslint forces the developer to not have any `console` statement, in this case we want to warn the
   * user without throwing an error so it's perfectly safe to disable this rule.
   */
  /* eslint-disable-next-line no-console */
  console.warn(message);
};
