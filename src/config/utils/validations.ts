import TASK_STATUS from './constants';

export function existOrError(value: string, message: string) {
  if (!value) {
    throw message;
  }

  if (Array.isArray(value) && value.length === 0) {
    throw message;
  }

  if (typeof value === 'string' && !value.trim()) {
    throw message;
  }
}

export function checkType(value: string, message: string) {
  if (!Object.values(TASK_STATUS).includes(value)) {
    throw message;
  }
}
