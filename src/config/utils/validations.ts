export function existOrError(value: string, msg: string) {
  if (!value) throw msg;
  if (Array.isArray(value) && value.length === 0) throw msg;
  if (typeof value === 'string' && !value.trim()) throw msg;
}

export function notExistOrError(value: string, msg: string) {
  try {
    existOrError(value, msg);
  } catch {
    return;
  }

  throw msg;
}

export function isIntegerOrError(value: number, msg: string) {
  if (!Number.isInteger(Number(value)) || Number(value) < 0) throw msg;
}

export function isIntegerPositiveOrError(value: number, msg: string) {
  if (!Number.isInteger(Number(value)) || Number(value) <= 0) throw msg;
}

export function isBooleanOrError(value: boolean, msg: string) {
  if (typeof value !== 'boolean') throw msg;
}

export function equalsOrError(valueA: string, valueB: string, msg: string) {
  if (valueA !== valueB) throw msg;
}
