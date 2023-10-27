/**
 * A utility to create className strings.
 *
 * Derived from
 * https://github.com/JedWatson/classnames
 * @return {string}
 *
 * Use like this!:
 *
 * (at the top)
 * // requires: ixl/external/classnames
 *
 * (outside of react classes)
 * var cx = require('ixl/external/classnames');
 */
function classNames() {
  let classes = '';

  for (let i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    const arg = arguments[i];
    if (!arg) continue;

    const argType = typeof arg;

    if ('string' === argType || 'number' === argType) {
      classes += ' ' + arg;
    } else if (Array.isArray(arg)) {
      // eslint-disable-next-line prefer-spread
      classes += ' ' + classNames.apply(null, arg);
    } else if ('object' === argType) {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes += ' ' + key;
        }
      }
    }
  }

  return classes.substr(1);
}

export default classNames;
