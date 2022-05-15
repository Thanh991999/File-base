
export const TYPE_ERROR = 'error';

export default print



function print (log, type = TYPE_ERROR) {
  console[type](log);
}

